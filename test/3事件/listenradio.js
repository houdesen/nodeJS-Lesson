const Radio = require("./radio.js");

const video ={
    name:"music radio",
    freq:"106.7"
}

var radio = new Radio(video);
radio.on("play",(radio)=>{
    console.log("\"%s\" FM %s opened",radio.name,radio.freq);
    setTimeout(()=>{
        console.log("lalala...");
    },2000);
});
radio.on("stop",(radio)=>{
    console.log("\"%s\" FM %s closed",radio.name,radio.freq);
    process.exit();
})