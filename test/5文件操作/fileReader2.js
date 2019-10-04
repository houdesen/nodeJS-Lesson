const http = require("http");
const path = require("path");
const fs = require("fs");
http.createServer(function(req,res){
    var arg = process.argv[2];
    // if(arg == undefined){
    //     var file = __filename;
    // }else{
    //     var file = __dirname+'\\'+arg; 
    // }
    // var len = fs.statSync(file).size;
    // var buf = new Buffer(len);
    // var fid = fs.openSync(file, 'r');

    // fs.readSync(fid, buf, 0, len, 0);
    // res.write(buf.toString("utf8"));
    // fs.closeSync();
    if(arg == undefined){
        fs.open(process.argv[1],"r+",function(err,fd){
            var statObj = fs.statSync(process.argv[1]);
            var buf = Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buf.toString());
                    fs.closeSync();
                }
            });
        })
    }
    else{
        fs.open(__dirname+arg,"r+",function(err,fd){
            var statObj = fs.statSync(process.argv[1]);
            var buf = Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buf.toString());
                    fs.closeSync();
                }
            });
        })
    }
    // res.end();
}).listen(8081);