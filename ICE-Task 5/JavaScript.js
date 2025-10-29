const clock = document.querySelector('.datetime-display');

function updateTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    clock.textContent = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}

setInterval(updateTime, 1000);
updateTime();

const alarmInput = document.getElementById('datetime');
const setAlarmBtn = document.getElementById('SetAlarmbtn');
let alarmTime = null;
let alarmTimeout = null;    
setAlarmBtn.addEventListener('click', () => {
    alarmTime = new Date(alarmInput.value);
    const currentTime = new Date();
    // You can add alarm logic here
});