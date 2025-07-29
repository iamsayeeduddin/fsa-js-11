// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const arr2 = [...arr, 0, 10, 39];

// Rest Parameter
// function add(a, b, ...rest) {
//   //   console.log(rest);
//   if (rest.length) {
//     let res = a + b;
//     rest.forEach(function (val) {
//       res += val;
//     });
//     return res;
//   }
//   return a + b;
// }

// Arrow Functions

// const add = (a, b, ...rest) => {
//   if (rest.length) {
//     let res = a + b;
//     rest.forEach((val) => (res += val));
//     return res;
//   }
//   return a + b;
// };

// console.log(add(1, 2, 345));

// Array Methods  - Map, Filter

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const students = [
  { name: "Sayeed", course: "MERN" },
  { name: "Aleem", course: "MERN" },
  { name: "Qazi", course: "AWS" },
  { name: "Rahmat", course: "SOC" },
  { name: "Azeem", course: "DA/DS" },
];

// const newArr = arr.map((val, index) => val * 2);
const newArr = students.filter((val) => val.course === "MERN");

console.log(newArr, students);
