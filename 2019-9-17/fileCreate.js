const fs = require("fs");
const path = require("path");
fs.mkdirSync("hello");

var list = fs.readdirSync(__dirname);
console.log(list);

fs.rmdirSync(path.join(__dirname,"/hello"))