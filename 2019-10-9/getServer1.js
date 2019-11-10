/**
 * 请求localhost:8081/
 * 响应html页面，页面里边有一个超链接
 * <a href='localhost:8081/new?newId=12&newType=1'>新闻</a>
 * 点击超链接的时候在控制台输出发起请求的资源路径和传递了参数
 */
const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req,res)=>{
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName == "/"){
        var htmlContent = fs.readFileSync("index.html");
    
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        res.end("<a href='http://localhost:8081/new?newId=12&newType=1'>新闻</a>");
    }
    else if(pathName == "/new"){
        console.log(urlObj.pathname);
        console.log(urlObj.query.newId);
        console.log(urlObj.query.newType);
    }
}).listen(8081);