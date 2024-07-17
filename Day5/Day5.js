//Function Declaration
//Task-1

function checkEvenOrOdd(num) {
  num % 2 == 0 ? console.log("Even") : console.log("Odd");
}
checkEvenOrOdd(11);

//Task-2
function Sqrt(num) {
  var sqrt;
  sqrt = num * num;
  console.log(sqrt);
}
Sqrt(2);

//Function Expression
//Task-3
function MaxNum(num1, num3) {
  var max;
  max = num1 > num3 ? num1 : num3;
  return `Max number  is ${max}`;
}

console.log(MaxNum(11, 22));

//Task-4
function statement() {
  var a = "Hi, ";
  var b = "I'm Pratik!";
  return a + b;
}
console.log(statement());

//Task-5
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(10, 20));

//Task-6
const stringCheck = () => {
  var str = "Hello, I'm Pratik!";
  var check = str.includes("o");
  return check;
};
console.log(stringCheck());

//Task-7
function product(num1, num2 = 10) {
  return num1 * num2;
}
console.log(product(22));

//Task-8
function message(name, age = 23) {
  return `Hello ${name} you are ${age} years old!`;
}
console.log(message("Pratik"));

//Task-9
function call(fn, number) {
  for (let i = 0; i < number; i++) {
    fn();
  }
}
function sayHello() {
  console.log("Hello, I'm Pratik!");
}
call(sayHello, 5);

//Task-10
function call2(fn1, fn2, num1) {
  return fn2(fn1(num1));
}

function add(num1) {
  return num1 + 1;
}
function res(num1) {
  return num1 * num1;
}
console.log(call2(add, res, 10));
