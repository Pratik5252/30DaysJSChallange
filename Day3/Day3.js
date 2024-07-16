//If-Else Statements
//Task-1
var num = 10;
if (num > 0) {
  console.log("number is positive");
} else {
  console.log("number is negative");
}
//Task-2
var age = 20;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can't vote");
}

//Nested If-Else Statements
//Task-3
let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c) {
  console.log("a is greater");
} else if (b > c && b > a) {
  console.log("b is greater");
} else {
  console.log("c is greater");
}

//Switch Case
//Task-4
function whichDay(num) {
  switch (num) {
    case 1:
      console.log("SUNDAY");
      break;
    case 2:
      console.log("MONDAY");
      break;
    case 3:
      console.log("TUESDAY");
      break;
    case 4:
      console.log("WEDNESDAY");
      break;
    case 5:
      console.log("THURSDAY");
      break;
    case 6:
      console.log("FRIDAY");
      break;
    case 7:
      console.log("SATURDAY");
      break;
  }
}
whichDay(3);

//Task-5
function Grade(marks) {
  switch (marks) {
    case 90:
      console.log("A");
      break;
    case 70:
      console.log("B");
      break;
    case 50:
      console.log("C");
      break;
    case 30:
      console.log("D");
      break;
    case 0:
      console.log("F");
      break;
  }
}

Grade(15);

//Task-6
function checkEvenOrOdd(num) {
  num % 2 == 0 ? console.log("Even") : console.log("Odd");
}
checkEvenOrOdd(11);

//Task-7
function checkLeapYear(year) {
  if (year % 4 == 0) {
    console.log("Leap Year");
  } else {
    console.log("Not a Leap Year");
  }
}
checkLeapYear(2023);
