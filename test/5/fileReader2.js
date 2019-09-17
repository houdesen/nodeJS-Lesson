const http = require("http");
const path = require("path");
const fs = require("fs");
http.createServer(function(req,res){
    var arg = process.argv[2];
    if(arg == undefined){
        var file = __filename;
    }else{
        var file = __dirname+'\\'+arg; 
    }
    var len = fs.statSync(file).size;
    var buf = new Buffer(len);
    var fid = fs.openSync(file, 'r');

    fs.readSync(fid, buf, 0, len, 0);
    res.write(buf.toString("utf8"));
    fs.closeSync();
    
    res.end();
}).listen(8081);