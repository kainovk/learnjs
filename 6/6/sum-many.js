function sum(a) {
    let sum = a;

    function add(b) {
        sum += b;
        return add;
    }

    add.toString = () => sum;

    return add;
}

console.log(sum(1)(2).toString()); // 3
console.log(sum(5)(-1)(2).toString()); // 6
console.log(sum(6)(-1)(-2)(-3).toString()); // 0
console.log(sum(0)(1)(2)(3)(4)(5).toString()); // 15