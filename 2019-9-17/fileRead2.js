const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname,"/file.txt");

//执行到异步方法时，可以注册一个事件然后把具体操作交给操作系统内核来完成，不影响后续应用程序的执行
//当操作系统内核完成相应操作，触发事件，执行回调函数
fs.readFile(filePath,function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})//异步读取

console.log("read end");