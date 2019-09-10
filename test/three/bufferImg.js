const http = require("http");
const fs = require("fs");
const path =require("path")

http.createServer(function(req,res){
    var imgPath = path.join(__dirname,"/99.jpg");
    var imgHtml = fs.readFileSync(imgPath);
    var base64data = imgHtml.toString("base64");
    var imgSrc = "data:image/jpg; base64,"+base64data;
    var htmlStr = "<!DOCTYPE html><head></head>"+"<body><img src='"+imgSrc+"'/></body>"+"</html>";
    res.writeHead(200,{"Context-Type":"text/html"});
    res.write(htmlStr);
    res.end();
}).listen(8081);