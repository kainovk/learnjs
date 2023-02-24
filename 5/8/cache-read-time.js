let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let messageReadTime = new WeakMap();

messageReadTime.set(messages[0], '11:00');
messageReadTime.set(messages[2], '11:35');

let messageOneReadTime = messageReadTime.get(messages[0]) || 'unread';
let messageTwoReadTime = messageReadTime.get(messages[1]) || 'unread';
let messageThreeReadTime = messageReadTime.get(messages[2]) || 'unread';

console.log(messageOneReadTime);
console.log(messageTwoReadTime);
console.log(messageThreeReadTime);

messageReadTime.set(messages[2], '12:10');
console.log(messageReadTime.get(messages[2]));
