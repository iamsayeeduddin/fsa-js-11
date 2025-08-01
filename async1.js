var add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a > 0 && b > 0) {
        let res = a + b;
        resolve(res);
      } else {
        reject("Values must be greater than 0");
      }
    }, 2000);
  });
};

var subtract = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a > 0 && b > 0) {
        let res = a - b;
        resolve(res);
      } else {
        reject("Values must be greater than 0");
      }
    }, 1000);
  });
};

var multiply = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a > 0 && b > 0) {
        let res = a * b;
        resolve(res);
      } else {
        reject("Values must be greater than 0");
      }
    }, 2000);
  });
};

// add(10, 20)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Async Operation Succesfull!"));

// multiply(10, 20)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Async Operation Succesfull!"));

// subtract(10, 20)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Async Operation Succesfull!"));

// add(10, 20)
//   .then((res) => {
//     subtract(res, 5);
//   })
//   .then((subRes) => multiply(subRes, 2))
//   .then((mulRes) => console.log(mulRes))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Async Operation executed!"));

fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((res2) => console.log(res2))
  .catch((err) => console.log(err));
