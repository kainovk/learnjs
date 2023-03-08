let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
    // full: true - после rabbit.eat()
};

rabbit.eat(); // this берется из объекта перед точкой. в нашем случае это rabbit