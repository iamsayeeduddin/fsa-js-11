var arr = ["apple", "grapes", "apple", "orange", "lemon", "apple", "grapes"];

// {
//     "apple": 3,
//     "orange": 1,
//     "grapes": 2,
//     "lemon": 1
// }

let obj = {};

arr.forEach(function (fruit) {
  if (obj[fruit]) {
    obj[fruit] += 1;
  } else {
    obj[fruit] = 1;
  }
});

console.log(obj);
