//Task-1
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//Task-2
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

//Task-3
numbers.push(6);
console.log(numbers);

//Task-4
numbers.pop();
console.log(numbers);

//Task-5
numbers.shift();
console.log(numbers);

//Task-6
numbers.unshift(7);
console.log(numbers);

//Task-7
var arr = [];
numbers.map((newArray) => {
  arr.push(newArray * 2);
});
console.log(arr);

//Task-8
var even = [];
numbers.filter((num) => {
  if (num % 2 == 0) {
    even.push(num);
  }
});
console.log(even);

//Task-9
var add = numbers.reduce((sum, num) => sum + num, 0);
console.log("Sum of all number in array is ", add);

//Task-10
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//Task-11
numbers.forEach((num) => {
  console.log(num);
});

//Task-12
var matrix1 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
];
console.log(matrix1);

//Task-13
console.log(matrix1[0][1]);

for (var i = 0; i < matrix1.length; i++) {
  for (var j = 0; j < matrix1[i].length; j++) {
    console.log(matrix1[i][j]);
  }
}
