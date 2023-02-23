let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits; // в копии хранится ссылка на тот же объект
shoppingCart.push("Банан");

console.log( fruits.length ); // 4