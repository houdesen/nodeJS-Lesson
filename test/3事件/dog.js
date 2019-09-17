const events = require("events");
const EventEmitter = events.EventEmitter;

function Dog(name,energy){
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
    setInterval(()=>{
        this.emit("bark"); 
    },1000)           
}
Dog.prototype.__proto__ =EventEmitter.prototype;

module.exports = {Dog:Dog};
