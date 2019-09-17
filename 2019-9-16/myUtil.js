const util = require("util");

function Parent(name) {
    this.name = name;
}
Parent.prototype.show = function() {
    console.log(thhis.name);
}

function Child() {

}
// 通过关键字，也可直接继承
util.inherits(Child, Parent);

/**
 * 继承方式
 * 1.Parent.call(this)  Child.prototype.__proto__ = Parent.prototype
 * 2.Child extends Parent {}
 * 3.util.inherits(Child,Parent)
 * 
 */