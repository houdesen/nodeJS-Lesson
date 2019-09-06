console.time("test");
function loopTime(){
    var sum = 0;
    for (let i = 0; i < 1000; i++) {
        for (let index = 0; index < 100; index++) {
            sum +=i*index;
            
        }
        
    }
    return sum;
}

loopTime();
console.timeEnd("test");