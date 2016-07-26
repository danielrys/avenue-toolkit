var IONIC_GULP_CONFIG_FILE = '../ionic-gulp-browserify-typescript/index.js';
var PATH_TO_INDEX = './node_modules/avenue-toolkit/index.ts';
var LOOKUP_QUERY = 'src: ';

var fs = require('fs');

var text = fs.readFileSync(IONIC_GULP_CONFIG_FILE, "utf8");
var lines = [];
var success = true;

text.split(/\r?\n/).forEach(function (line) {
    if(~line.indexOf(LOOKUP_QUERY)){
        try{
            var trailingComma = line[line.length - 1] === ','; 
            line = line.replace(/'/g, '"');
            line = trailingComma? line.substring(0, line.length - 1) : line; 
            
            var parts = line.split(LOOKUP_QUERY);
            var srcArray = JSON.parse(parts[1]);
            if(!~srcArray.indexOf(PATH_TO_INDEX) && srcArray instanceof Array){
                srcArray.push(PATH_TO_INDEX);
                parts[1] = JSON.stringify(srcArray);
                line = parts[0] + LOOKUP_QUERY + parts[1];
                line += trailingComma? ',' : '';
                line = line.replace(/"/g, '\'');
            } else {
               throw ('Failed to add entry into gulp config, please fix manually.');
            }
        } catch(e){
            success = false;
            console.log('Failed to parse the file,', e);
        }
    }
    lines.push(line);
});

if(success){
    var EOL = text.indexOf("\r\n") >= 0 ? "\r\n" : "\n";
    fs.writeFileSync(IONIC_GULP_CONFIG_FILE, lines.join(EOL), 'utf8');
} else {
    console.log('No changes done to gulp config, please add', IONIC_GULP_CONFIG_FILE, 'path to "src" array manually.');
}