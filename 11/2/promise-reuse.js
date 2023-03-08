let promise = new Promise(function(resolve, reject) {
    resolve(1); // выполнится первый resolve/reject

    setTimeout(() => resolve(2), 1000); // игнорируется
});

promise.then(console.log);