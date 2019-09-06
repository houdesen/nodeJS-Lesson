
const http = require("http");
const path = require("path");

var server = http.createServer(function(req,res){
    var htmlPath = path.join(__dirname,"/views/view.html");
    console.log(htmlPath);
    res.write(htmlPath);
    res.end();
});

server.listen(8080);
