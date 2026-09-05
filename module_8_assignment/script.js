// Task 1: Change Text
const t1Heading = document.getElementById("task1-heading");
const t1Btn = document.getElementById("task1-btn");
t1Btn.addEventListener("click", () => {
  t1Heading.textContent = "Hello JavaScript";
});

// Task 2: Change Paragraph
const t2Para = document.getElementById("task2-para");
const t2Btn = document.getElementById("task2-btn");
t2Btn.addEventListener("click", () => {
  t2Para.textContent = "I love JavaScript.";
});

// Task 3: Show & Hide
const t3Para = document.getElementById("task3-para");
const t3ShowBtn = document.getElementById("task3-show-btn");
const t3HideBtn = document.getElementById("task3-hide-btn");
t3ShowBtn.addEventListener("click", () => {
  t3Para.style.display = "block";
});
t3HideBtn.addEventListener("click", () => {
  t3Para.style.display = "none";
});

// Task 4: Change Background Color
const t4Box = document.getElementById("task4-box");
const t4Btn = document.getElementById("task4-btn");
t4Btn.addEventListener("click", () => {
  t4Box.style.backgroundColor = "lightseagreen";
});

// Task 5: Increase Number
let t5Count = 0;
const t5Num = document.getElementById("task5-num");
const t5Btn = document.getElementById("task5-btn");
t5Btn.addEventListener("click", () => {
  t5Count++;
  t5Num.textContent = t5Count;
});

// Task 6: Decrease Number
let t6Count = 10;
const t6Num = document.getElementById("task6-num");
const t6Btn = document.getElementById("task6-btn");
t6Btn.addEventListener("click", () => {
  t6Count--;
  t6Num.textContent = t6Count;
});

// Task 7: Counter
let t7Count = 0;
const t7Display = document.getElementById("task7-counter");
document.getElementById("task7-inc-btn").addEventListener("click", () => {
  t7Count++;
  t7Display.textContent = t7Count;
});
document.getElementById("task7-dec-btn").addEventListener("click", () => {
  t7Count--;
  t7Display.textContent = t7Count;
});
document.getElementById("task7-reset-btn").addEventListener("click", () => {
  t7Count = 0;
  t7Display.textContent = t7Count;
});

// Task 8: Input Value Show
const t8Input = document.getElementById("task8-input");
const t8Btn = document.getElementById("task8-btn");
const t8Output = document.getElementById("task8-output");
t8Btn.addEventListener("click", () => {
  const name = t8Input.value.trim();
  if (name !== "") {
    t8Output.textContent = `Hello ${name}`;
  }
});

// Task 9: Change Image
const t9Img = document.getElementById("task9-img");
const t9Btn = document.getElementById("task9-btn");
t9Btn.addEventListener("click", () => {
  t9Img.src = "https://picsum.photos/id/20/200/120";
});

// Task 10: Change Text Color
const t10Para = document.getElementById("task10-para");
const t10Btn = document.getElementById("task10-btn");
t10Btn.addEventListener("click", () => {
  t10Para.style.color = "crimson";
});

// Task 11: Simple Login Check
const t11User = document.getElementById("task11-user");
const t11Pass = document.getElementById("task11-pass");
const t11Btn = document.getElementById("task11-btn");
const t11Msg = document.getElementById("task11-msg");
t11Btn.addEventListener("click", () => {
  if (t11User.value === "admin" && t11Pass.value === "1234") {
    t11Msg.textContent = "Login Successful";
    t11Msg.style.color = "green";
  } else {
    t11Msg.textContent = "Invalid Username or Password";
    t11Msg.style.color = "red";
  }
});

// Task 12: Age Check
const t12Age = document.getElementById("task12-age");
const t12Btn = document.getElementById("task12-btn");
const t12Msg = document.getElementById("task12-msg");
t12Btn.addEventListener("click", () => {
  const age = Number(t12Age.value);
  if (age >= 18) {
    t12Msg.textContent = "You can vote.";
    t12Msg.style.color = "green";
  } else {
    t12Msg.textContent = "You cannot vote.";
    t12Msg.style.color = "red";
  }
});

// Task 13: Add Two Numbers
const t13Num1 = document.getElementById("task13-num1");
const t13Num2 = document.getElementById("task13-num2");
const t13Btn = document.getElementById("task13-btn");
const t13Result = document.getElementById("task13-result");
t13Btn.addEventListener("click", () => {
  const sum = Number(t13Num1.value) + Number(t13Num2.value);
  t13Result.textContent = `Result = ${sum}`;
});

// Task 14: Even or Odd
const t14Input = document.getElementById("task14-input");
const t14Btn = document.getElementById("task14-btn");
const t14Result = document.getElementById("task14-result");
t14Btn.addEventListener("click", () => {
  const val = Number(t14Input.value);
  if (t14Input.value.trim() === "") {
    t14Result.textContent = "Please enter a valid number";
    return;
  }
  if (val % 2 === 0) {
    t14Result.textContent = `${val} is Even`;
  } else {
    t14Result.textContent = `${val} is Odd`;
  }
});

// Task 15: Simple To-Do List
const t15Input = document.getElementById("task15-input");
const t15Btn = document.getElementById("task15-btn");
const t15List = document.getElementById("task15-list");
t15Btn.addEventListener("click", () => {
  const taskText = t15Input.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    t15List.appendChild(li);
    t15Input.value = "";
  }
});