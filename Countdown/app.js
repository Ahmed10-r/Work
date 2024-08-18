// // let days = document.getAnimations("days");
// // let hours = document.getAnimations("hours");
// // let minutes = document.getAnimations("Min");
// // let seconds = document.getAnimations("sec");

// // let targetDate =  new Date("14 August 2024 00:00:00");

// // let countdown = setInterval(function(){
// //     let currentDate =  new Date();
// //     let difference =  currentDate.getTime() - targetDate.getTime();
// //     let d = Math.floor(difference/1000/60/60/24);
// //     let h = Math.floor(difference/1000/60/60)%24;
// //     let m = Math.floor(difference/1000/60) %60;
// //     let s = Math.floor(difference/1000)%60;

// //     days.innerHTML = d;
// //     hours.innerHTML = h;
// //     minutes.innerHTML = m;
// //     seconds.innerHTML = s;

// // },1000)

// // app.js

// // Set the date we're counting down to (Pakistan Independence Day)
// const countDownDate = new Date("August 14, 2024 00:00:00").getTime();

// // Update the countdown every 1 second
// const x = setInterval(function() {
//   // Get today's date and time
//   const now = new Date().getTime();
  
//   // Find the distance between now and the countdown date
//   const distance = countDownDate - now;
  
//   // Time calculations for days, hours, minutes, and seconds
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//   // Display the result in the corresponding elements
//   document.getElementById("days").innerHTML = days;
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("Min").innerHTML = minutes;
//   document.getElementById("sec").innerHTML = seconds;
  
//   // If the countdown is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.querySelector(".Countdown-cantainer").innerHTML = "EXPIRED";
//   }
// }, 100


// app.js

// Set the date we're counting down to (Pakistan Independence Day)
const countDownDate = new Date("August 14, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get today's date and time
  const now = new Date().getTime();
  
  // Find the distance between now and the countdown date
  const distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the corresponding elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown-container").innerHTML = "EXPIRED";
  }
}, 1000);
