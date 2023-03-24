let user = {
    name: "John",
    go: function () {
        console.log(this.name)
    }
} /*ошибка - здесь нужна*/ ;

(user.go)()