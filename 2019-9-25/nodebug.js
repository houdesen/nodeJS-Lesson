const fs = require("fs");
/**
 * try catch 只能捕获同步代码中的异常
 */
try {
    
    fs.readFile(__filename,function(err,data){
        throw new Error('fail');
        if(err){
            console.log(err);
            
        }else{
            console.log(data);
        }
    });
} catch (error) {
    console.log(error.message);
}
debugger;


//捕获异步异常
setTimeout(function(err){
    // console.log(err);
    throw new Error('fail1');
},200);
process.on("uncaughtException",function(err){
    if(err){
        console.log(err);
    }
})