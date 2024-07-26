// //Task-1 throw error in try/catch
// const error = () => {
//   throw new Error("This is an error");
// };
// try {
//   error();
// } catch (e) {
//   console.log(e.message);
// }

// //Task-2
// const operation = (a, b) => {
//   try {
//     if (b !== 0) {
//       console.log(a / b);
//     } else {
//       throw new Error("Division by zero is not allowed");
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// operation(10, 0);
// operation(10, 2);

// //Task-3
// const operation2 = (a, b) => {
//   try {
//     if (b !== 0) {
//       console.log(a / b);
//     } else {
//       throw new Error("Division by zero is not allowed");
//     }
//   } catch (err) {
//     console.log(err.message);
//   } finally {
//     console.log("The Operation end");
//   }
// };
// operation2(10, 2);

// //Task-4
// class customErr extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "Custom Error";
//   }
// }
// try {
//   throw new customErr("This is a custom error");
// } catch (err) {
//   console.log(err.name, err.message);
// }

// //Task-5
// const check = (str) => {
//   try {
//     if (str) {
//       console.log("String is not empty");
//     } else {
//       throw new customErr("String is empty");
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// check("Happy");
// check("");

//Task-6
const promise = () => {
  let random = Math.random() < 0.5;
  return new Promise((res, rej) => {
    if (random) {
      res("Success");
    } else {
      rej("Failed");
    }
  });
};
promise()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Task-7
const promise2 = async () => {
  let random = Math.random() < 0.5;
  const promise = new Promise((res, rej) => {
    if (random) {
      res("Success");
    } else {
      rej("Failed");
    }
  });
  try {
    const result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
promise2();

//Task-8
fetch("https://fakestoreai.com/poducts")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log("Error"));

//Task-9
const getDetails = async () => {
  try {
    const response = await fetch("https://fakestoreai.com/poducts");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
getDetails();
