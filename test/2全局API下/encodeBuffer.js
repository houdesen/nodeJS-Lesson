var username = process.argv[2];
var password = process.argv[3];
console.log(username,password);

if(userName != undefined && password !=undefined){
    var loginStr = userName + ":" + password;
    var buf3 = Buffer.from(loginStr,"utf-8");
    var base64str1 = buf3.toString("base64");
    console.log("base64加密：",base64str1);
}else{
    console.log("用户名密码不能为空");
}