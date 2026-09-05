// --- Part 1: DOM Manipulation ---
const heading = document.getElementById("heading");
const paragraph = document.querySelector(".desc");
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
  heading.textContent = "Hello JavaScript";
  paragraph.textContent = "DOM Manipulation is Easy!";
  heading.style.color = "blue";
});

// --- Part 2: setTimeout() ---
const msgBtn = document.getElementById("msg-btn");
const timerMsg = document.getElementById("timer-msg");

msgBtn.addEventListener("click", () => {
  setTimeout(() => {
    timerMsg.textContent = "Hello! 2 seconds completed.";
  }, 2000);
});

// --- Part 3: setInterval() ---
let count = 0;
let timerId = null;

const counterDisplay = document.getElementById("counter-value");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
  // making the timer logical for this part
  if (timerId !== null) return;

  timerId = setInterval(() => {
    count++;
    counterDisplay.textContent = count;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null; // reseting timerId to allow restarting the timer
});

// --- Part 4: Callback Function ---
function callbackFunction() {
  console.log("Welcome to JavaScript");
}

function greet(name, callback) {
  console.log(`Hello ${name}`);
  if (typeof callback === "function") {
    callback();
  }
}

// Function Call (calling the greet function with a name and the callback function)
greet("Amit", callbackFunction);