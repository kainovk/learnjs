function fibSlow(n) {
    if (n <= 1) {
        return n;
    }
    return fibSlow(n - 1) + fibSlow(n - 2);
}

function fib(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
}

console.log(fibSlow(3)); // 2
console.log(fibSlow(7)); // 13

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
