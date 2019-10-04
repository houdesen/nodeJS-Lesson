const http = require("http");
const path = require("path");
const fs = require("fs");
http.createServer(function(req,res){
    var arg = process.argv[2];
    if(arg == undefined){
        var reader = fs.createReadStream(process.argv[1]);
        reader.pipe(reader);
    }else{
      var reader = fs.createReadStream(__dirname+arg);
      reader.pipe(reader);
    }
    // if(fs.existsSync(file)) {
    //     fs.createReadStream(file).pipe(process.stdout);
    //   } else {
    //     console.error('%s not exist!', file);
    //     process.exit(1);
    //   }
    
    res.end();
}).listen(8081);