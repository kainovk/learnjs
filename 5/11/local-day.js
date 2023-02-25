function getLocalDay(date) {
    let day = date.getDay();
    return day === 0 ? 7 : day;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getLocalDay(date)); // 2