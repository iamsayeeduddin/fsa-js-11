var arr = ["ABC"];
// arr.push("Sayeed");
// arr.push("Arun");
// arr.push("Faizan");
// arr.pop();
arr.unshift("Sayeed");
arr.unshift("Arun");
arr.unshift("Faizan");
arr.shift();

// console.log(arr);

// For Loop
var ar = ["MERN", "AWS", 100, "Data Science"];
// console.log(ar[0]);
// console.log(ar[1]);
// console.log(ar[2]);
// console.log(ar[3]);
// console.log(ar[4]);
// console.log(ar[5]);
// console.log(ar[6]);
// console.log(ar[7]);
// console.log(ar[8]);

// for (var i = 1; i <= 10; i++) {
//   console.log(ar[i], i);
// }
// var ar = ["MERN", "AWS", 100, "Data Science"];

// console.log(ar.toString()[5]);
// var res = ar.join("*");
// var res = ar.includes("AWS");
ar.splice(0, 1, "Cybersecurity", "Data Analyst", "MEAN");
// console.log(res);
console.log(ar);
