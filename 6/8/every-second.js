function printNumbersTimeout(from, to) {
    let cur = from;

    setTimeout(function next() {
        console.log(cur);

        if (cur < to) {
            setTimeout(next, 1000);
        }
        cur++;
    }, 1000);
}

function printNumbersInterval(from, to) {
    let cur = from;

    let timerId = setInterval(function () {
        console.log(cur);

        if (cur === to) {
            clearInterval(timerId);
        }
        cur++;
    }, 1000);
}

printNumbersTimeout(3, 6);
printNumbersInterval(3, 6);