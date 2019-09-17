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
    if(fs.existsSync(file)) {
        fs.createReadStream(file).pipe(process.stdout);
      } else {
        console.error('%s not exist!', file);
        process.exit(1);
      }
    
    res.end();
}).listen(8081);