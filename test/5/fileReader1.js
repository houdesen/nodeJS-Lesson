const http = require("http");
const path = require("path");
const fs = require("fs");
http.createServer(function(req,res){
    var arg = process.argv[2];
    if(arg == undefined){
        var filePath = path.join(__filename);
        fs.readFile(filePath,function(err,data){
            if(err){
                res.write("no!!!!");
                res.end();
            }else{
                res.write(data.toString("utf8"));
                res.end();
            }
        })
    } else {
        var str = __dirname+arg;
        var filePath = path.join(str);
        console.log(filePath);
        fs.readFile(filePath,function(err,data){
            if(err){
                res.write("no no!!!!!");
                res.end();
            }else{
                res.write(data.toString("utf8"));
                res.end();
            }
        })
    }
}).listen(8081);