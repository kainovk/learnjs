let user = {
    name: "Василий Иванович",
    age: 35
};

let userJson = JSON.stringify(user);
console.log(userJson);

let userFromJson = JSON.parse(userJson);
console.log(userFromJson);