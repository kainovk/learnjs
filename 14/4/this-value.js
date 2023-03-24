let obj, method;

obj = {
    go: function () {
        console.log(this);
    }
};

obj.go();               // (1) обычный вызов метода

(obj.go)();             // (2) эквивалентно (1)

(method = obj.go)();    // (3) присвоение функции, теряется this

(obj.go || obj.stop)(); // (4) тоже теряется this