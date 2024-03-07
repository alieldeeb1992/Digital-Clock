let myMainDiv = document.getElementById("main");
let myHours = document.getElementById("hours");
let myMinutes = document.getElementById("minutes");
let mySeconds = document.getElementById("seconds");
let amPm = document.getElementById("im-pm");
function getTime() {
  let myTime = new Date();
  let hoursOfTime = myTime.getHours();
  let minutesOfTime = myTime.getMinutes();
  let secondOfTime = myTime.getSeconds();
  myHours.innerText = hoursOfTime - 12;
  myMinutes.innerText = minutesOfTime;
  mySeconds.innerText = secondOfTime;
  if (myHours.innerText < 10) {
    myHours.innerText = "0" + myHours.innerText;
  } else if (myMinutes.innerText < 10) {
    myMinutes.innerText = "0" + myMinutes.innerText;
  } else if (mySeconds.innerText < 10) {
    mySeconds.innerText = "0" + mySeconds.innerText;
  }
  if (hoursOfTime > 12) {
    amPm.innerText = "Pm";
  }
  setTimeout(() => {
    getTime();
  }, 1000);
}
getTime();
