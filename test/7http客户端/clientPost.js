const http = require("http");
const querystring = require("querystring");


var options = {
    host: "localhost",
    port: 8081,
    method: "post"
}
var userName = process.argv[2];
var passWord = process.argv[3];
var postData = {userName:userName,passWord:passWord};
postData = querystring.stringify(postData);
var req = http.request(options,function(res){});

req.write(postData);
req.end();