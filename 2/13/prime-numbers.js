let n = 10;

function isPrime(num) {
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i < Math.sqrt(num) + 1; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        alert(i);
    }
}