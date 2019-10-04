const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    var file = path.join(__dirname,"\\data.txt");
    var read = fs.createReadStream(file);
    read.on("data",(data)=>{
        res.write(data);
        res.end();
    })
}).listen(8081);