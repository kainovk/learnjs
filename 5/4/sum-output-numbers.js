function sumInput() {
    let nums = [];
    while (true) {
        let input = prompt('Введите число', 0);

        if (!isFinite(+input) || input === "" || input === null) {
            break;
        }

        nums.push(+input);
    }

    let sum = 0;
    for (let n of nums) {
        sum += n;
    }

    return sum;
}

alert(sumInput());