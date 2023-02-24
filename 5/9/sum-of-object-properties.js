let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries)); // 650

function sumSalaries(obj) {
    return Object.values(obj).reduce((sum, num) => sum + num, 0);
}
