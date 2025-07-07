// Arithmetic Operators

var add = parseInt("10.356") + "2";

// Assignment Operators
var a = 10;
a = 100;
// b = a + 10;

// console.log(a++);
// console.log(a + 2);

// Logical Operations
// Falsy - false, 0, "", undefined, null, NaN

// AND OR NOT

// &&
// A | B | A && B
// T | T | T
// F | T | F
// T | F | F
// F | F | F

// ||
// A | B | A && B
// T | T | T
// F | T | T
// T | F | T
// F | F | F

// !
// A | !A
// T | F
// F | T

if (!(false || " ")) {
  console.log("Executed");
}

// Equality Operators
var a = 10;
var b = "10";

// if (a === b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

console.log(10 !== "10");
