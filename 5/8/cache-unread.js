let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// читаем сообщения
readMessages.add(messages[0]);
readMessages.add(messages[2]);
readMessages.add(messages[2]);
readMessages.add(messages[2]);

// прочитано?
console.log('message[0] read? -> ' + readMessages.has(messages[0])); // true
console.log('message[1] read? -> ' + readMessages.has(messages[1])); // false
console.log('message[2] read? -> ' + readMessages.has(messages[2])); // true
