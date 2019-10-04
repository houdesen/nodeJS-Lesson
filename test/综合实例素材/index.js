const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");

http.createServer(function(req,res){
    

    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    if(pathName == "/"){
        var htmlPath = path.join(__dirname,"/index.html");
        var htmlContent = fs.readFileSync(htmlPath);
        htmlContent = htmlContent.toString("utf8");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
    }else if(pathName == "/getlist"){
        fs.readFile("./1.png",function(err,data){
            res.writeHead(200,{"Content-Type":"image/png"});
            res.write(data);
            res.end();
        })
    }
     
}).listen(8081);