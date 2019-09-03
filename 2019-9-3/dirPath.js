/**引入http原生模块 */
const http = require("http");
/**文件操作原生模块 */
const fs = require("fs");
/**文件、目录路径 */
const path = require("path");

/**创建一个服务器 */
var server = http.createServer(function(req/**请求对象 */,res/**响应对象 */){
    //当客户端的http请求发起的时候，才会执行回调函数里面的内容
    var htmlPath = path.join(__dirname,"/view/index.html");
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");

    console.log(htmlContent);

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();

});

/**服务监听一个端口 */
server.listen(8081);
