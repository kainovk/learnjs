console.log(1.35.toFixed(1)); // 1.4 -> если рассмотреть число с большей точностью
console.log(6.35.toFixed(1)); // 6.3 -> если рассмотреть число с большей точностью

// посмотрим на них ближе
console.log(1.35.toFixed(20)); // 1.35000000000000008882 > 1.35
console.log(6.35.toFixed(20)); // 6.34999999999999964473 < 6.35

// решение
console.log(Math.round(1.35 * 10) / 10); // 1.4
console.log(Math.round(6.35 * 10) / 10); // 6.4