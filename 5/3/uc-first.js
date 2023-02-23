console.log(ucFirst("вася") == "Вася");
console.log(ucFirst("") == "");

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}