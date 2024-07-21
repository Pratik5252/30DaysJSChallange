//Task-1 -- Create template literals
var fname = "Pratik";
var age = 23;
console.log(`Hi I'm ${fname} my age is ${age}`);

//Task-2 -- Create multi-line string literals
var str = `Hello I like to learn about design 
and it can impact the world.`;
console.log(str);

//Task-3 -- Array Destructing
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num1 = arr[0];
var num2 = arr[1];
console.log(num1, num2);

//Task-4 -- Object Destructing
var books = { title: "Book1", author: "Author1", year: 2001 };
var author = books.author;
var title = books.title;
console.log(`Name of the book is ${title} author of that book is ${author}`);

//Task-5 -- Spread Operators
var names = ["pratik", "yash", "ved"];
var newArr = [...names, 1, 2, 3, 4];
console.log(newArr);

//Task-6 -- Rest Operators
var sum = 0;
function add(...nums) {
  for (const num of nums) {
    sum += num;
  }
  return sum;
}
console.log(add(1, 2, 4, 5));
console.log(add(1, 2, 3));

//Task-7 -- Default Parameters
function product(a, b = 1) {
  return a * b;
}
console.log(product(4));

//Task-8 -- Enhanced Object Literals
const number1 = 5;
const number2 = 10;

const cal = {
  number1,
  number2,
  add() {
    return this.number1 + this.number2;
  },
};

console.log(cal.add());

//Task-9 -- Enhanced Object Literals
const msg = "greet";

const greet = {
  [msg](name) {
    return `Hello, ${name}`;
  },
};
console.log(greet.greet("Pratik"));
