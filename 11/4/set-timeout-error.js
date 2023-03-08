new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// catch не сможет обработать ошибку, так как ошибка выбрасывается спустя секунду