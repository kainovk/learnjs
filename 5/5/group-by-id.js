let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(arr) {
    return arr.reduce((res, value) => {
        res[value.id] = value;
        return res;
    }, {});
}

console.log(usersById);
