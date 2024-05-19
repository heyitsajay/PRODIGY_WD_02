let screen = document.querySelector('.screen')
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let reset = document.querySelector('#reset')
let lap = document.querySelector('#lap') // Added lap button
let lapsContainer = document.querySelector('#laps') // Container for laps

let msecs = 0;
let secs = 0;
let mins = 0;
let hrs = 0;

let timer = null;

function startCount() {
    msecs++;
    if (msecs == 100) {
        msecs = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;

            if (mins == 60) {
                mins = 0;
                hrs++;
            }
        }
    }

    let msecStr = msecs < 10 ? `0${msecs}` : `${msecs}`;
    let secStr = secs < 10 ? `0${secs}` : `${secs}`;
    let minStr = mins < 10 ? `0${mins}` : `${mins}`;
    let hrStr = hrs < 10 ? `0${hrs}` : `${hrs}`;
    screen.innerText = `${hrStr} : ${minStr} : ${secStr} : ${msecStr}`;
}

start.addEventListener('click', () => {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(startCount, 10);
});

stop.addEventListener('click', () => {
    clearInterval(timer);
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    screen.innerText = `00 : 00 : 00 : 00`;
    msecs = 0;
    secs = 0;
    mins = 0;
    hrs = 0;
    lapsContainer.innerHTML = ''; // Clear laps when reset
});

lap.addEventListener('click', () => {
    if (timer !== null) {
        let lapTime = screen.innerText;
        let lapElement = document.createElement('div');
        lapElement.classList.add('lap');
        lapElement.innerText = lapTime;
        lapsContainer.appendChild(lapElement);
    }
});
