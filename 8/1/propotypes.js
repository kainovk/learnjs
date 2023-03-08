let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

alert( rabbit.jumps ); // true, собственное свойство

delete rabbit.jumps;

alert( rabbit.jumps ); // null, найдем в прототипе

delete animal.jumps;

alert( rabbit.jumps ); // undefined, такого свойства нет ни у rabbit, ни у прототипа animal