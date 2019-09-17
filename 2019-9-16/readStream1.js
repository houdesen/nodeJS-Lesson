const stream = require("stream");

//一个可读流
var reader = new stream.Readable();
//向内存添加数据
reader.push("hello");
reader.push("world123");
//终止赋值
reader.push(null);
reader.pipe(process.stdout);//打印到终端