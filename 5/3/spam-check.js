console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam("innocent rabbit") == false);

function checkSpam(str) {
    let s = str.toLowerCase();
    return s.includes("viagra") || s.includes("xxx");
}
