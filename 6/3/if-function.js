let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi(); // функция sayHi существует только в блоке if, снаружи ее нет, поэтому получим ошибку