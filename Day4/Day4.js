//Task-1
for (let num = 0; num <= 10; num++) {
  console.log(num);
}

//Task-2
for (let num = 1; num <= 10; num++) {
  console.log(`5 x ${num} =`, 5 * num);
}

//Task-3
var sum = 0;
let num1 = 1;
while (num1 <= 10) {
  sum += num1;
  num1++;
}
console.log("Sum of numer from 1 to 10 is ", sum);

//Task-4
let num2 = 10;
while (num2 > 0) {
  console.log(num2);
  num2--;
}

//Task-5
let num3 = 1;
do {
  console.log(num3);
  num3++;
} while (num3 <= 5);

//Task-6
let num = 5;
let fac = 1;
do {
  fac *= num;
  num--;
  console.log(fac);
} while (num >= 1);

//Task-7
for (let n = 1; n <= 5; n++) {
  console.log("*".repeat(n));
}
//Task-8
for (let n = 1; n < 10; n++) {
  if (n == 5) {
    continue;
  }
  console.log("Number is ", n);
}
//Task-9
for (let n = 1; n < 10; n++) {
  if (n == 7) {
    break;
  }
  console.log("Number is ", n);
}
