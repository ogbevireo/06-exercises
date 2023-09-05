
let currentTime = new Date().getHours();
let hour = Math.floor(Math.random(currentTime) * 24);
let person = 'Grace';



// if (hour >= 6 && hour <= 12) {
//   console.log(`Good morning! The time is: ${hour} O'clock.`);

// } else if (hour >= 13 && hour <= 17) {
//   console.log(`Good afternoon! The time is: ${hour} O'clock.`);
// } else {
//   console.log(`Good night! The time is: ${hour} O'clock.`);
// }


let timeOfDay = (hour) => {
  if (hour >= 6 && hour <= 12) {
    return `Good morning! ${person}, it's ${hour} O'clock`;
  } else if (hour >= 13 && hour <= 17) {
    return `Good afternoon! ${person}, it's ${hour} O'clock`;
  } else {
    return `Good night! ${person}, it's ${hour} O'clock`;
  }
}

let timeNow = timeOfDay(hour);
console.log(timeNow);