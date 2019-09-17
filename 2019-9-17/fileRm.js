const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname,"/file.txt");
fs.unlinkSync(filePath);//删除该路径文件