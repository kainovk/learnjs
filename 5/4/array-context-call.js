let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
});

// 3-м элементом массива является функция, которая выводит this (arr)
arr[2](); // 'a','b',[Function (anonymous)]