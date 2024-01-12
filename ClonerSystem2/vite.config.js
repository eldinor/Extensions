export default {
    build: {
        lib: {
            entry: 'index.js',
            name: 'babylon-clonersystem',
            fileName: (format) => `${format}/babylon-clonersystem.js`
        },
        rollupOptions: {
            external: [
                '@babylonjs/core', 
             //   '@babylonjs/inspector', 
              //  '@babylonjs/loaders'
            ],
            output: {
                globals: {
                    '@babylonjs/core': 'BABYLON',
                 //   '@babylonjs/inspector': 'BABYLON',
                 //   '@babylonjs/loaders': 'BABYLON'
                }
            }
        }
    },
    optimizeDeps: {
        exclude: [
            "@babylonjs/core",
         //   "@babylonjs/inspector",
          //  "@babylonjs/loaders"        
        ]
    }
}