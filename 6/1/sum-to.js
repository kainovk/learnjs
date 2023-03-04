function sumToLoop(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i;
    }

    return result;
}

function sumToRecursive(n) {
    if (n <= 1) {
        return 1;
    }

    return n + sumToRecursive(n - 1);
}

function sumToFormula(n) {
    return n / 2 * (1 + n);
}

console.log(sumToLoop(1));
console.log(sumToLoop(2));
console.log(sumToLoop(3));
console.log(sumToLoop(4));

console.log(sumToRecursive(1));
console.log(sumToRecursive(2));
console.log(sumToRecursive(3));
console.log(sumToRecursive(4));

console.log(sumToFormula(1));
console.log(sumToFormula(2));
console.log(sumToFormula(3));
console.log(sumToFormula(4));