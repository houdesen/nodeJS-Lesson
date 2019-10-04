const http = require("http");

http.createServer((res,req) => {
    req.end("hello world");
}).listen(8081);
console.log("ok");