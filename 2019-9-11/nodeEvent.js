//引入events模块
const events = require("events");
//实例化event对象
var eventEmitter = new events.EventEmitter();
//绑定事件、事件监听
eventEmitter.once("hello",function(arg1,arg2){
    console.log("hello world");
    console.log(arg1,arg2);
})
//触发事件，可以进行参数传递
eventEmitter.emit("hello","node","good");
eventEmitter.emit("hello","11","good");