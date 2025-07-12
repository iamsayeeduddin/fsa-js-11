const arr = [1, "arr", NaN, 2, 3, 3, 4, 5, 6, 7, 8, 1, 9];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0 || typeof arr[i] !== "number") {
    arr.splice(i, 1);
    i--;
  }
}
// console.log(arr);

var cities = ["Agra", "Mumbai", "Delhi", "Hyderabad", "Pune"];
//EDGE CASES

if (cities.includes("Delhi") && cities.includes("Bangalore")) {
  //   console.log("Delhi and Bangalore exists in the array!");
} else {
  //   console.log("Either Delhi or Bangalore or both doesn't exist/s in the array");
}

/// Duplicates Removal

var ar = [1, 2, 2, 1, 3, 4, 5, 0, 5, 6, 7];

// for (var i = 0; i < ar.length; i++) {
//   for (var j = i + 1; j < ar.length; j++) {
//     if (ar[i] === ar[j]) {
//       ar.splice(j, 1);
//       j--;
//     }
//   }
// }
var uniqueAr = [];
for (var i = 0; i < ar.length; i++) {
  if (!uniqueAr.includes(ar[i])) {
    uniqueAr.push(ar[i]);
  }
}

console.log(ar, uniqueAr);
