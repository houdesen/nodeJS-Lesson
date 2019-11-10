const http = require("http");
const url = require("url");
// const querystring = require("querystring");
const fs = require("fs");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname == "/"){
        var fileContent = fs.readFileSync("postFile.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fileContent);
    }else if(urlObj.pathname == "/upload"){
        var strData = "";
        req.setEncoding("binary");
        req.on("data",function(chunk){
            strData += chunk;
        })
        req.on("end",function(){
            // console.log(strData);
            var dataArr = strData.split("\r\n");
            var fileData = dataArr.slice(5,dataArr.length - 2);
            fileData = fileData.join("\r\n");
            var buf = Buffer.from(fileData,"binary");
            fs.writeFileSync("file.jpg",buf,{"encoding":"binary"});
            res.end("提交成功","utf-8");
            // console.log(dataArr);
        })
    }
}).listen(8081);