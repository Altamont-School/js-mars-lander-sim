// Utility function for delaying (or causing our program to slow down) an action and letting us see the results of each "round"
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// get the lander from the document
const lander = document.querySelector("#lander");
const testAngle = document.querySelector("#testAngle");
const landerAngle = document.querySelector("#landerAngle");
const testButton = document.querySelector("a");
const timeRemaining = document.querySelector("#time");
const landerStatus = document.querySelector("#status");

// Function to test your algorithm
async function test() {
  // disable testButton
  testButton.classList.add("disabled");
  testButton.innerHTML = "Testing...";
  // generate a random angle
  var angle = Math.random() * 360;
  angle = Math.round(angle * 100) / 100;
  //   set the test angle in the document
  testAngle.innerHTML = `${angle}&deg;`;
  landerAngle.innerHTML = `${angle}&deg`;
  // set the angle of the lander
  landerObj.angle = angle;
  lander.style.transform = `rotate(${landerObj.angle}deg)`;
  //   Call the students' function
  await sleep(1000);
  lander.style.transform = `rotate(${stayAlive(angle)}deg)`;
  landerAngle.innerHTML = `${stayAlive(angle)}&deg`;
  landerObj.angle === 12
    ? (landerStatus.innerHTML = "👍")
    : (landerStatus.innerHTML = "💩");
  return angle;
}

// Function to start the test and run it for ten rounds
async function beginTest() {
  // Interval for the test
  for (var i = 0; i < 10; i++) {
    test();
    timeRemaining.innerHTML = 10 - (i + 1);
    await sleep(2000);
  }
  //   reset everything
  lander.style.transform = `rotate(0deg)`;
  testButton.classList.remove("disabled");
  testButton.innerHTML = `🚀 Run Test`;
  timeRemaining.innerHTML = "";
  testAngle.innerHTML = "";
  landerAngle.innerHTML = "";
  landerStatus.innerHTML = "";
}

// DO YOUR WORK BELOW
// Lander object to be used in the functions
const landerObj = {
  angle: 0,
  isAlive: true,
};

// Function to rotate the lander
function stayAlive(angle) {
  let correction = null;
  if (angle > 12) {
    adjustment = angle - 12;
    correction = angle - adjustment;
    landerObj.angle = correction;
    console.log(
      `The input angle is ${angle} and the correction is ${adjustment}.  This makes the lander's angle ${landerObj.angle}`
    );
  } else {
    adjustment = 12 - angle;
    correction = angle + adjustment;
    landerObj.angle = correction;
    console.log(
      `The input angle is ${angle} and the correction is ${adjustment}.  This makes the lander's angle ${landerObj.angle}`
    );
  }
  return correction;
}
