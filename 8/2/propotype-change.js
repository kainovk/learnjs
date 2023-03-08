function Rabbit() {
}

Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; // 1 - true, так как {} будет работать для объектов, созданных после присвоения
Rabbit.prototype.eats = false; // 2 - false, так как изменили значение объекта
delete rabbit.eats; // 3 - true, так как у rabbit нет свойства eats
delete Rabbit.prototype.eats; // 4 - undefined, так как удалили свойство eats по ссылке

alert(rabbit.eats);