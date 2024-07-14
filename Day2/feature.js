//Arithmetic Operators
function operations(num1, num2) {
  var sum = num1 + num2;
  console.log("Sum of Two number is", sum);

  var sub = num1 - num2;
  console.log("Subtraction of Two number is", sub);

  var mul = num1 * num2;
  console.log("Multiplication of Two number is", mul);

  var div = num1 / num2;
  console.log("Division of Two number is", div);

  var rem = num1 % num2;
  console.log("Reminder of Two number is", rem);
}

operations(1, 2);

var a = -1;
var b = 2;
console.log(a == -1 && b == 0);
console.log(a == -1 || b == 0);

a > 0 ? console.log("Positive") : console.log("Negative");
