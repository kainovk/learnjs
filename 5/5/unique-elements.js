function unique(arr) {
    let result = [];

    for (let element of arr) {
        if (!result.includes(element)) {
            result.push(element);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O