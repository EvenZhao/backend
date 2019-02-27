

export function getNowDate() {
    let myDate = new Date();
    let y = myDate.getFullYear();
    let m = myDate.getMonth() + 1;
    let d = myDate.getDate();
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();
    let seconds = myDate.getSeconds();
    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;
    let nowDate = y + "-" + m + "-" + d + " " + hours + ":" +  minutes + ":" +seconds;
    return nowDate;
}

