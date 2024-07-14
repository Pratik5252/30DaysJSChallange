//Arithmetic Operators

function add(num1, num2) {
  var res = num1 + num2;
  return res;
}
function sub(num1, num2) {
  var res = num1 - num2;
  return res;
}
function mul(num1, num2) {
  var res = num1 * num2;
  return res;
}
function div(num1, num2) {
  var res = num1 / num2;
  return res;
}
function rem(num1, num2) {
  var res = num1 % num2;
  return res;
}
console.log(add(10, 20));
console.log(sub(10, 20));
console.log(mul(10, 20));
console.log(div(10, 20));
console.log(rem(10, 20));

//Assignment Operators
var num1 = 10;
console.log((num1 += 20));
var num2 = 20;
console.log((num2 -= 20));

//Comparison Operators
let a = 10;
let b = 20;
if (b > a) {
  console.log("b is greater than a");
} else if (b < a) {
  console.log("a is greater than b");
}

if (a >= 10) {
  console.log("a is greater than or equal to 10");
}
if (b <= 100) {
  console.log("b is lesser than or equal to 100");
}

if (a == b) {
  console.log("Hi");
} else if (b === 20) {
  console.log("Hello");
} else {
  console.log("Bye");
}

//Logical Operators
if (a == 10 && b == 20) {
  console.log("Correct");
}
if (a == 10 || b == 20) {
  console.log("Still Correct");
}

if (a !== b) {
  console.log("Not Like Us");
}

//Ternary Operators
a >= 0 ? console.log("Positive") : console.log("Negative");
