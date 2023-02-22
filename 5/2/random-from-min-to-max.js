console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));

function random(min, max) {
    return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
    let float = min + Math.random() * (max - min + 1);
    return Math.floor(float);
}
