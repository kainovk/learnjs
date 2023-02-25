function getSecondsToday() {
    let now = new Date();
    let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let millis = now - start;
    return Math.round(millis / 1000);
}

function getSecondsToTomorrow() {
    let secondsInFullDay = 3600 * 24;
    return secondsInFullDay - getSecondsToday();
}

console.log(getSecondsToday());
console.log(getSecondsToTomorrow());
