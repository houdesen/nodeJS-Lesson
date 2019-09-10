/**初始一个Buffer */
var buf = Buffer.alloc(10);
console.log(buf);

/**将一个UTF-8编码的字符串转化为buffer数据 */
var buf1 = Buffer.from("hello","utf-8");
console.log(buf1);

var base64str = buf1.toString("base64");
console.log(base64str);

var buf2 = Buffer.from(base64str,"base64");
console.log(buf2.toString("utf-8"));
