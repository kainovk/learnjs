function pow(x, n) {
    if (!Number.isInteger(n) || n < 1) {
        return null;
    }
    return x ** n;
}

console.log(pow(3, 2) === 9);
console.log(pow(3, 3) === 27);
console.log(pow(1, 100) === 1);
