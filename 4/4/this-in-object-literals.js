function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
// так как this принадлежит функции, мы ничего не знаем о свойстве name, поэтому получим ошибку