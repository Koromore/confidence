
const fs = require('fs');
const path = require('path');
const UglifyJS = require("uglify-js");
//压缩js

let item = 'js/index.js'

let fileObject = fs.readFileSync(item, 'utf8');

let finalCode = UglifyJS.minify(fileObject, { mangle: { toplevel: true } }).code;

let str = item.split("/")[item.split("/").length-1];

let newname = 'js/'+ str.substring(0, str.lastIndexOf('.js'))+'.min.js';

fs.writeFileSync(newname, finalCode, 'utf8');

