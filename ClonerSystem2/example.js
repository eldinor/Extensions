import { Scene } from '@babylonjs/core/scene';
import { Engine } from '@babylonjs/core/Engines/engine';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { ActionManager } from '@babylonjs/core/Actions/actionManager';
import { ExecuteCodeAction } from '@babylonjs/core/Actions/directActions';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import '@babylonjs/core/Helpers/sceneHelpers';

import {StandardMaterial} from '@babylonjs/core/Materials'

import {ClonerSystem} from './src/clonersystem/'

const debug = true;

let engine;
let scene;

const createScene = () => {
    const canvas = document.querySelector('canvas');
    engine = new Engine(canvas, true);
    
    // This creates a basic Babylon Scene object (non-mesh)
    scene = new Scene(engine);
  //  scene.clearColor = new Color4(0,0,0,0);
    
    scene.createDefaultCameraOrLight(true, true, true);
    scene.activeCamera.radius = 20;

    // Some random shapes
    const ico = MeshBuilder.CreateIcoSphere("ico", { radius: 0.5, subdivisions: 4 });
    ico.material = new StandardMaterial("box material", scene);
    ico.material.diffuseColor = Color3.Teal();

    const box = MeshBuilder.CreateBox("box", { width: 0.5, height: 0.2 });
    box.material = new StandardMaterial("box material", scene);
    box.material.diffuseColor = Color3.Green();

    const capsule = MeshBuilder.CreateCapsule("caps");
    capsule.material = new StandardMaterial("capsule material", scene);
    capsule.material.diffuseColor = Color3.Red();


    const rc = new ClonerSystem.RadialCloner(
        [ico, box, capsule],
        scene,
        {
            count: 24,
            radius: 8,
        }
    );

    if (debug) {
        // Log the scene to the console for debugging
        console.log("scene", scene);
    }
};

const startRenderLoop = () => {
    engine.runRenderLoop(() => {
        scene.render();
    });
};

createScene();
startRenderLoop();
