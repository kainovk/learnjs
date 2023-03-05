function f() {
    alert(this); // выведется null (ниже сделали привязку)
}

let user = {
    g: f.bind(null)
};

user.g();