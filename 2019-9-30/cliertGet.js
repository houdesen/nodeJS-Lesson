const http =require("http");

/**
 * https是在http基础上进行了SSL加密让数据不在明文传输
 */
http.get("http://localhost:8081",function(res){
    var result = "";
    res.on("data",function(chunk){
        result += chunk;
    })
    res.on("end",function(){
        console.log(result);
    });
})