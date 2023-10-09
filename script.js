const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const year = document.querySelector("#year");
const loading = document.querySelector("#loading")

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);


function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}

year.innerText = currentYear + 1;

setTimeout(() => {
    loading.remove();
    countdown.style.display = "flex"
}, 1000);

setInterval(updateCountdown, 1000);




















// const days = document.querySelector("#days");
// const hours = document.querySelector("#hours");
// const minutes = document.querySelector("#minutes");
// const seconds = document.querySelector("#seconds");
// const countdown = document.querySelector("#countdown");
// const year = document.querySelector("#year");
// const loading = document.querySelector("#loading")


// const currentYear = new Date().getFullYear();
// const newYearTime = new Date(`january 01 ${currentYear + 1} 00:00:00`);

// // set background year
// year.innerText = currentYear + 1

// // update countdown time
// function updateCountdown() {
//   const currentTime = new Date();
//   const diff = newYearTime - currentTime;

//   const d = Math.floor(diff / 1000 / 60 / 60 / 24);
//   const h = Math.floor(diff / 1000 / 60 / 60) % 24;
//   const m = Math.floor(diff / 1000 / 60) % 60;
//   const s = Math.floor(diff / 1000) % 60;
//   // Add values to DOM
//   days.innerHTML = d;
//   hours.innerHTML = h < 10 ? "0" + h : h;
//   minutes.innerHTML = m < 10 ? "0" + m : m
//   seconds.innerHTML = s < 10 ? "0" + s : s;
// }

// // show spinner before countdown
// // set time out will take in a f and we can do whatever we want and it will happen whatever amount of time we put there, it will happen after that
// setTimeout(() => {
//   loading.remove();
//   countdown.style.display = "flex";
// }, 1000);


// //we want to run the updateCoundDown f every seconds 
// // now we need to call setInterval f , it will take a f and run it at evey ms we put in 

// // run every Second
// setInterval(updateCountdown, 1000);
