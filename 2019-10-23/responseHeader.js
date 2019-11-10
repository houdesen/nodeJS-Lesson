const http = require("http");

http.createServer(function(req,res){
    // res.writeHead(200,{"Content-type":"text/html"});
    /**响应内容的字节长度 */
    // res.setHeader("Content-Length",10);
    // res.setHeader("Content-Encoding","gzip");    服务端压缩方式设置
    res.setHeader("Date",(new Date()).toLocaleString());//响应时间
    res.setHeader("Set-Cookie","name=zhangsan");
    res.statusCode=404;
    res.end("hello node");
}).listen(8081)