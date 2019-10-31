let clock = document.getElementById("clock");
let hexColor = document.getElementById("hex-color");

function hexClock() {
    let time = new Date();
    let hours = (time.getHours() % 12).toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = "0" + hours;
    }

    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }

    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    hexColor.innerText = `#${hours}${minutes}${seconds}`;

    document.body.style.backgroundColor = hexColor.innerText;
}

hexClock();
setInterval(hexClock, 1000);