let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

animals.sort(function (a, b) {
    return new Intl.Collator().compare(a, b);
});

console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК