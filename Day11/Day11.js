//Task-1 --> Create Promises
const promise1 = new Promise((res, rej) => {
  setTimeout(function () {
    res("This the message");
  }, 2000);
});
promise1.then(function (msg) {
  console.log(msg);
});

//Task-2 --> Create Promises
const promise2 = new Promise((res, rej) => {
  setTimeout(function () {
    rej("This is an Error");
  }, 2000);
});
promise2.catch(function (err) {
  console.log(err);
});

//Task-3 --> Chain Promise
const promise3 = new Promise((res, rej) => {
  setTimeout(function () {
    res("This is the message");
  }, 5000);
});
promise3
  .then(function (msg) {
    console.log(msg);
  })
  .then(function () {
    console.log("This is the second message");
  })
  .catch(function (err) {
    console.log(err);
  });

//Task-4 --> Async/Await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
  console.log("Start");
  await delay(2000);
  console.log("This is the message");
}
main();

//Task-5 --> Async/Await
function delay(ms, start = false) {
  return new Promise((res, rej) =>
    setTimeout(() => {
      if (start) {
        rej("This is an error");
      } else {
        res("This is the result");
      }
    }, ms)
  );
}
async function main() {
  try {
    console.log("Start");
    await delay(2000, true);
    console.log("This is the message");
  } catch (err) {
    console.log(err);
  }
}
main();

//Task-6 --> Use API
const apiCall = () => {
  fetch("https://fakestoreapi.com/products").then((res) =>
    res
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  );
};
apiCall();

//Task-7 --> Use API
const apiCall2 = async () => {
  await fetch("https://fakestoreapi.com/products").then((res) =>
    res
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  );
};
apiCall2();

//Task-8 --> Promise.all()
function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
async function allPromise() {
  try {
    let promise = await Promise.all([
      delay(1000, "First"),
      delay(2000, "Second"),
      delay(3000, "Third"),
    ]);
    console.log(promise);
  } catch (err) {
    console.log(err);
  }
}
allPromise();

//Task-9 --> Promise.race()
function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
async function allPromise2() {
  try {
    let promise = await Promise.race([
      delay(1000, "First"),
      delay(2000, "Second"),
      delay(3000, "Third"),
    ]);
    console.log(promise);
  } catch (err) {
    console.log(err);
  }
}
allPromise2();
