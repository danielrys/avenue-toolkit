To make it work: 
 * import scss files of any used components into your app scss (*TODO* move the scss inline so that this step is not needed)
 * add the `avenue-toolkit.ts` file into the array of source files (*src* key) in `node_modules/ionic-gulp-browserify-typescript/index.js` (*TODO* make the imports work without this step)