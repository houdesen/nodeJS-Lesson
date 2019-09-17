
const http = require("http");
const path = require("path");
const fs = require("fs");

var server = http.createServer(function(req,res){
    var htmlPath = path.join(__dirname,"/views/view.html");
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");
    console.log(htmlPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});

server.listen(8080);
