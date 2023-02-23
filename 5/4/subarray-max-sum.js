console.log(getMaxSubSum([-1, 2, 3, -9]) === 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) === 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) === 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) === 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) === 100);
console.log(getMaxSubSum([1, 2, 3]) === 6);


function getMaxSubSum(arr) {
    let max = 0;
    let runningSum = 0;

    for (let item of arr) {
        runningSum += item;
        max = Math.max(max, runningSum);
        if (runningSum < 0) {
            runningSum = 0;
        }
    }

    return max;
}
