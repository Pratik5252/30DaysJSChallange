import chuck from "lodash";
import axios from "axios";
//Task-1
export function add(a, b) {
  return a + b;
}

//Task-2
export const person = {
  name: "John",
  age: 30,
  sayHello: function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};

//Task-3
export function sub(a, b) {
  return a - b;
}
export function div(a, b) {
  return a / b;
}

//Task-4
export default function mul(a, b) {
  return a * b;
}

//Task-5
// Done in module2.mjs

// Task-6
//First install lodash by npm i lodash
//Then import it in your file
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chuckNum = chuck(num, 2);
console.log(chuckNum);

// Task-7
//First install axios by npm i axios
//Then import it in your file
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res.data.slice(0, 5));
  })
  .catch((err) => {
    console.log(err);
  });
