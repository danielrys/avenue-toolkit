var IONIC_GULP_CONFIG_FILE = '../ionic-gulp-browserify-typescript/index.js';

var fs = require('fs');

var dir = fs.readdirSync('./');
console.log(dir);


var text = fs.readFileSync(IONIC_GULP_CONFIG_FILE, "utf8");
console.log(text);