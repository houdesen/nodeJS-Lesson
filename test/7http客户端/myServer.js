const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");
http.createServer((req,res)=>{
    // var filePath = path.join(__dirname,"data.json");
    // var urlObj = url.parse(req.url,true);
    // var data = fs.readFileSync(filePath);
    // data = data.toString();
    var result = "";
    req.on("data",function(chunk){
        result += chunk;
    })
    req.on("end",function(){
        console.log(result);
        // var resultObj = querystring.parse(result);
        // for(var i in data.length){
        //     if(resultObj.username == data[i].username){
        //         if(resultObj.password == data[i].password){
        //             console.log("登陆成功！！")
        //         }
        //     }
        // }
        // console.log("用户名，密码不正确！");
        // console.log(resultObj,data.length);
    })
    
}).listen(8081)