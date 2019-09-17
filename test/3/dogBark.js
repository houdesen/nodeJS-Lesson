const events = require("events");
var eventEmitter = new events.EventEmitter();
const dog = require("./dog.js");
var dog1 = new dog.Dog("taidi",5);
var dog2 = new dog.Dog("zangao",8);
dog1.on("bark",() => {
    if(dog1.energy > 0){
        
        dog1.energy--;
        console.log(dog1.name + " barked! energy:"+dog1.energy);
    }else{
        process.exit("bark");
    }   
})

dog2.on("bark",() => {
    if(dog2.energy > 0){
        
        dog2.energy--;
        console.log(dog2.name + " barked! energy:"+dog2.energy);
    }else{
        process.exit("bark");
    }   
})