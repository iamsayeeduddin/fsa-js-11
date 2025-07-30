// var arr = ["apple", "grapes", "apple", "orange", "lemon", "apple", "grapes"];

// //{
// //     "apple": 3,
// //     "orange": 1,
// //     "grapes": 2,
// //     "lemon": 1
// // }

// const callback = (acc, val) => {
//   if (acc[val]) {
//     acc[val] += 1;
//   } else {
//     acc[val] = 1;
//   }
//   return acc;
// };

// // var resultObj = arr.reduce(callback, {});
// // console.log(resultObj);

// var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr2.reduce((prev, curr) => prev + curr, 0));

/// Hoisting
// var x;
// console.log(x);
// var x = 10;

// Default Parameters
// const add = (a, b = 0) => {
//   return a + b;
// };

//console.log(add(1));

const greet = (name = "User") => {
  console.log(`Welcome ${name}!`);
};

greet();
