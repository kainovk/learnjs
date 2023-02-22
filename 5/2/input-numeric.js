function readNumber() {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while (isNaN(num) || num === null || num === '');

    return +num;
}

let number = readNumber();

alert(`Вы ввели: ${number}`);