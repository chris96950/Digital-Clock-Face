const secondhand = document.querySelector('.second-hand');
const minutehand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');


function setClockFace() {
    const now = new Date();
 
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondhand.style.transform = `rotate(${secondsDegrees}deg)`;
 
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)) + 90;
    minutehand.style.transform = `rotate(${minutesDegrees}deg)`;
 
    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;
    hourhand.style.transform = `rotate(${hoursDegrees}deg)`;

    var time =hours +":" + minutes + ":" + seconds;
    const digitalClockFace = document.querySelector('.time');
    digitalClockFace.innerHTML = time;
 }
 
 setInterval(setClockFace, 1000);
 