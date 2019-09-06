function loop(){
    console.log('I will loop forever!');
}
var loop1 = setInterval(function(){
    loop();
},500);
setTimeout(() => {      
    console.log("Game over");
    clearInterval(loop1);
},5000);
