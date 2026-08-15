// ==========================================
// Task 1 — Array Methods
// ==========================================
console.log("--- Task 1 ---");

// Initializing the fruits array
let fruits = ["Apple", "Mango", "Banana"];

// Adding 'Orange' to the end of the array
fruits.push("Orange");

// Removing the last item from the array
fruits.pop();

// Iterating and printing each fruit in the console
fruits.forEach((fruit) => {
  console.log(fruit);
});


// ==========================================
// Task 2 — map() & filter()
// ==========================================
console.log("\n--- Task 2 ---");

let numbersTask2 = [10, 20, 30, 40, 50];

// Adding 10 to each number using map
let numbersPlusTen = numbersTask2.map((num) => num + 10);
console.log("Numbers + 10:", numbersPlusTen);

// Filtering numbers greater than 30
let numbersGreaterThan30 = numbersTask2.filter((num) => num > 30);
console.log("Numbers > 30:", numbersGreaterThan30);


// ==========================================
// Task 3 — reduce(), find(), findIndex()
// ==========================================
console.log("\n--- Task 3 ---");

let marks = [40, 55, 70, 85, 30];

// Calculating total marks using reduce
let totalMarks = marks.reduce((acc, curr) => acc + curr, 0);
console.log("Total Marks:", totalMarks);

// Finding the first mark greater than or equal to 70
let firstMark70OrAbove = marks.find((mark) => mark >= 70);
console.log("First mark >= 70:", firstMark70OrAbove);

// Finding the index of mark 85
let indexOf85 = marks.findIndex((mark) => mark === 85);
console.log("Index of 85:", indexOf85);


// ==========================================
// Task 4 — Object Methods
// ==========================================
console.log("\n--- Task 4 ---");

let studentObj = {
  name: "Rahim",
  age: 22,
  city: "Chittagong"
};

// Getting all keys of the object
console.log("Keys:", Object.keys(studentObj));

// Getting all values of the object
console.log("Values:", Object.values(studentObj));

// Getting key-value pairs as an array of arrays
console.log("Entries:", Object.entries(studentObj));

// Checking if 'name' property exists in the object
console.log("Has 'name' property?:", studentObj.hasOwnProperty("name"));


// ==========================================
// Task 5 — Set
// ==========================================
console.log("\n--- Task 5 ---");

// Creating a new Set
let setNumbers = new Set([10, 20, 30]);

// Adding 40 to the set
setNumbers.add(40);

// Removing 20 from the set
setNumbers.delete(20);

// Checking if 30 exists in the set
console.log("Set has 30?:", setNumbers.has(30));

// Printing all elements from the set
setNumbers.forEach((val) => {
  console.log("Set item:", val);
});


// ==========================================
// Task 6 — Map
// ==========================================
console.log("\n--- Task 6 ---");

// Creating a new Map
let studentMap = new Map();

// Setting key-value pairs
studentMap.set("name", "Rahim");
studentMap.set("age", 22);

// Retrieving the 'name' value
console.log("Student Name from Map:", studentMap.get("name"));

// Checking if 'age' key exists
console.log("Map has 'age'?:", studentMap.has("age"));

// Getting the total size of the map
console.log("Map size:", studentMap.size);


// ==========================================
// Task 7 — Spread & Rest Operators
// ==========================================
console.log("\n--- Task 7 ---");

// Combining two arrays using spread operator
let a = [1, 2, 3];
let b = [4, 5, 6];
let combinedArray = [...a, ...b];
console.log("Combined Array (Spread):", combinedArray);

// Function calculating sum of any number of arguments using rest operator
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum result:", sum(10, 20, 30));


// ==========================================
// Task 8 — Class & Constructor
// ==========================================
console.log("\n--- Task 8 ---");

class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
}

// Instantiating student objects
let student1 = new Student("Rahim", 22, "JavaScript");
let student2 = new Student("Karim", 23, "React");

console.log("Student 1:", student1);
console.log("Student 2:", student2);


// ==========================================
// Task 9 — Inheritance & Method Overriding
// ==========================================
console.log("\n--- Task 9 ---");

// Base parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Derived child class
class StudentChild extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  // Overriding parent method
  introduce() {
    console.log(`Hello, I am ${this.name} and I study ${this.subject}.`);
  }
}

let personObj = new Person("Anis");
let studentChildObj = new StudentChild("Tamim", "Computer Science");

personObj.introduce();
studentChildObj.introduce();


// ==========================================
// Task 10 — Bank Account System & Bonus Static Method
// ==========================================
console.log("\n--- Task 10 ---");

class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  // Deposit funds
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}. Current Balance: ${this.balance}`);
    }
  }

  // Withdraw funds with balance check
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}. Current Balance: ${this.balance}`);
    } else {
      console.log("Transaction failed: Insufficient balance or invalid amount.");
    }
  }

  // Bonus static helper method
  static getBankInfo() {
    return "Standard Bank Account Management System v1.0";
  }
}

// Creating an account and running transactions
let account = new BankAccount("Rahim", 5000);
account.deposit(1000);
account.withdraw(500);

// Displaying final summary
console.log(`Account Holder: ${account.name}`);
console.log(`Final Balance: ${account.balance}`);

// Calling the static method
console.log(BankAccount.getBankInfo());