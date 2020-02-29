//实现连接图标的动画效果
function breakChain() {
    let chain = document.getElementById("chain");
    chain.innerHTML = "&#xf0c1;";
    setTimeout( () => {
        chain.innerHTML = "&#xf127;";
    }, 1000);
}
breakChain();
setInterval(breakChain, 2000);

//实现电池图标的动画效果
function changeBattery() {
    let battery = document.getElementById("battery");
    battery.innerHTML = "&#xf244;";

    setTimeout( () => {
        battery.innerHTML = "&#xf243;";
    }, 1000);

    setTimeout( () => {
        battery.innerHTML = "&#xf242;";
    }, 2000);

    setTimeout( () => {
        battery.innerHTML = "&#xf241;";
    }, 3000);

    setTimeout( () => {
        battery.innerHTML = "&#xf240;";
    }, 4000);
}
changeBattery();
setInterval(changeBattery, 5000);

//实现沙漏图标的动画效果
function hourglassTime () {
    let hourglass = document.getElementById("hourglass");
    hourglass.innerHTML = "&#xf251;";

    setTimeout(() => {
        hourglass.innerHTML = "&#xf252;";
    }, 1000);

    setTimeout(() => {
        hourglass.innerHTML = "&#xf253;";
    }, 2000);

    setTimeout(() => {
        hourglass.innerHTML = "&#xf254;";
    }, 3000);
}

hourglassTime();
setInterval(hourglassTime, 4000);