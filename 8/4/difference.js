function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // первый вызов отличается от остальных тем, что здесь this=rabbit, а в остальных this=Rabbit.prototype
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();