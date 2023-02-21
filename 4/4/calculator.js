let calculator = {
    read() {
        this.first = +prompt('Введите первое значение', 0);
        this.second = +prompt('Введите второе значение', 0);
    },

    sum() {
        return this.first + this.second;
    },

    mul() {
        return this.first * this.second;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());