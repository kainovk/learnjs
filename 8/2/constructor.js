function Obj(name) {
    this.name = name;
}

let obj1 = new Obj('first');
let obj2 = new obj1.constructor('second');

console.log(obj2.name); // second