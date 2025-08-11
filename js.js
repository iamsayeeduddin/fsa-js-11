// var age = 18;
// var isLicenseAvailable;
// // console.log(isLicenseAvailable);
// if (age >= 18 && isLicenseAvailable) {
//   console.log("ALLOWED TO DRIVE");
// } else {
//   console.log("Not ALLOWED to DRIVE!");
// }

var arr = [1, 2, 3, 34, 4, 5, 6, 6];

// var resultantArr = arr.map((val) => val * 2);
var resultantArr = arr.filter((val) => val % 2 === 0);
export default resultantArr;
// console.log(resultantArr);

export const PI = 3.14;

export const call = (name) => {
  console.log(`Hey ${name}!`);
};

// module.exports = {
//   //   PI: PI,
//   PI,
//   call,
// };
