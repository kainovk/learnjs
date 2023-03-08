let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],

    __proto__: hamster
};

let lazy = {
    stomach: [],

    __proto__: hamster
};

// теперь у каждого хомяка свой stomach (в прототипе пушим в this, которым является объект перед точкой (speedy/lazy))
speedy.eat("apple");
console.log(speedy.stomach);
console.log(lazy.stomach);