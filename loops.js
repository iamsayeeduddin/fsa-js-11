var arr = [10, 20, 30, 40, 50, 60];

var i = 0;

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < arr.length);

function printVals(index, value) {
  console.log(value + index * 2);
}

arr.forEach(printVals);
// printVals(10, 0);
// printVals(20, 1);
// printVals(30, 2);
