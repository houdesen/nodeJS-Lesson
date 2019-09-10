function Bomb(){
    this.message = "bomb!!!";
}
Bomb.prototype.explode = function(){
    // var that = this;
    setTimeout(() => {
        console.log(this.message);
    },2000);
}
var bomb = new Bomb();
bomb.explode();