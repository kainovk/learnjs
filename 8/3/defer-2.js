function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function (ms) {
    let func = this;

    return function (...args) {
        setTimeout(() => func.apply(this, args), ms);
    }
};

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
f.defer(3000)(5, -1); // выведет 4 через 3 секунды.