/**引入http原生模块 */
const http = require("http");
/**文件操作原生模块 */
const fs = require("fs");
const url = require("url");
const path = require("path");

/**创建一个服务器 */
var server = http.createServer(function(req/**请求对象 */,res/**响应对象 */){
    // console.log(req.url);
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    // console.log(urlPathName);
    if(urlPathName == "/favicon.ico"){
        res.end();
    }
    else if(urlPathName == "/"){
        //当客户端的http请求发起的时候，才会执行回调函数里面的内容
        var htmlPath = __dirname + "\\view\\index.html";
        var htmlContent = fs.readFileSync(htmlPath);
        htmlContent = htmlContent.toString("utf8");

        // console.log(htmlContent);

        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
    }
    else if(urlPathName == "/js/index.js"){
        var jsPath = path.join(__dirname,"/js/index.js");
        var jsContent = fs.readFileSync(jsPath);
        // jsContent = jsContent.toString("utf8");

        // console.log(jsContent);
        res.writeHead(200,{"Content-Type":"text/javascript"});
        res.write(jsContent);
        res.end();
    }

});

/**服务监听一个端口 */
server.listen(8081);
