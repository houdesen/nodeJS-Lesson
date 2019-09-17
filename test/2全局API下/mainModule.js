// var circle = require("./circleModule.js");

/**1 */
// console.log(circle(3).circumference());
// console.log(circle(3).area());

/**2 */
// console.log(circle.circumference(2));
// console.log(circle.area(2));


/**demo */
var circleModule = require("./circleModule.js");
var r = process.argv[2];
var circleObj = circleModule.circleFun(r);
console.log("圆的周长：",circleObj.circumference());
console.log("圆的面积：",circleObj.area());

/**
 * 1.原生模块，随node环境安装就存在
 * 2.自定义模块，自己编写的程序
 * 3.第三方模块，在命令行中进行安装的模块，从服务器上下载到本地的
 * 直接require("模块名")
 */