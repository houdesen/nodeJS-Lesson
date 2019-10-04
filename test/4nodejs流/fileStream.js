const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/from.txt");
var writePath = path.join(__dirname,"/to.txt");
var readStream = fs.createReadStream(filePath);
var writeStream = fs.createWriteStream(writePath);
readStream.on("data",(data)=>{
    var str = data.toString().toUpperCase();
    console.log(str);
    writeStream.write(str);
    writeStream.end();
});
