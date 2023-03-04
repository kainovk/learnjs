function printListRecursive(list) {
    console.log(list.value);

    if (list.next) {
        printListRecursive(list.next);
    }
}

function printListLoop(list) {
    let copy = list;

    while (copy) {
        console.log(copy.value);
        copy = copy.next;
    }
}

function printListReverseRecursive(list) {
    if (list.next) {
        printListReverseRecursive(list.next);
    }

    console.log(list.value);
}

function printListReverseLoop(list) {
    let copy = list;
    let arr = [];

    while (copy) {
        arr.push(copy.value);
        copy = copy.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printListRecursive(list);
printListLoop(list);

console.log("reverse");

printListReverseRecursive(list);
printListReverseLoop(list);