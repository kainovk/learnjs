let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1]

function filterRangeInPlace(arr, min, max) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element < min || element > max) {
            arr.splice(i, 1);
            i--;
        }
    }
}