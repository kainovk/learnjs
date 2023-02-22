let str = "Привет";

str.test = 5; // так как примитив не является объектом, мы получим ошибку (в strict mode) или undefined

console.log(str.test);