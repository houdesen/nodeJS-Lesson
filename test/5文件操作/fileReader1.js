const http = require("http");
const path = require("path");
const fs = require("fs");
// http.createServer(function(req,res){
//     var arg = process.argv[2];
//     if(arg == undefined){
//         var filePath = path.join(__filename);
//         fs.readFile(filePath,function(err,data){
//             if(err){
//                 res.write("no!!!!");
//                 res.end();
//             }else{
//                 res.write(data.toString("utf8"));
//                 res.end();
//             }
//         })
//     } else {
//         var str = __dirname+arg;
//         var filePath = path.join(str);
//         console.log(filePath);
//         fs.readFile(filePath,function(err,data){
//             if(err){
//                 res.write("no no!!!!!");
//                 res.end();
//             }else{
//                 res.write(data.toString("utf8"));
//                 res.end();
//             }
//         })
//     }
// }).listen(8081);
var fileName = process.argv[2];
http.createServer(function(req,res){
    if(fileName == undefined){
        var str = "";
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err);
            }else{
                // console.log(data.toString());
                str = data.toString();
                res.end(str);
            }
        })
    }
    else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            var str = "";
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    // console.log(data.toString());
                    str = data.toString();
                    res.end(str);
                }
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end("文件不存在");
        }
    }
}).listen(8081)