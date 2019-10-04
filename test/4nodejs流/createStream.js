const stream = require("stream");
var c = 'a'.charCodeAt(0);
function MyReadable(){
    stream.Readable.call(this);
};
MyReadable.prototype = stream.Readable.prototype;
MyReadable.prototype._read = function() {
    this.push(String.fromCharCode(c++));
    if(c>'z'.charCodeAt(0)) this.push(null);
};
var my = new MyReadable();
my.pipe(process.stdout);
