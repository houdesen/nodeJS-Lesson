const events = require("events");
const util = require("util");

var EventEmitter = events.EventEmitter;
function Radio(video){
    EventEmitter.call(this);
    setTimeout(()=>{
        this.emit("play",video);
    },0);
    setTimeout(()=>{
        this.emit("stop",video);
    },2100);
}

util.inherits(Radio,EventEmitter);

module.exports = Radio;