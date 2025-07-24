// var a = 5;
// var b = "5";
// console.log(a === b);

// console.log(10 % 3);

function test(x) {
  return typeof x;
}

// console.log(test(10));

var arrData = [10, 2555, 333, 49000000000, 50000, 634, 1087, 898, 999];

// function reverseArray(arr) {
//   let newArr = [];
//   for (var i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(reverseArray(arrData));

var str = "Welcome to MERN Full Stack Development!";

// function countVowelsInString(sentence) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   var vowelsCount = 0;
//   for (var i = 0; i < sentence.length; i++) {
//     if (vowels.includes(sentence[i].toLowerCase())) {
//       vowelsCount += 1;
//     }
//   }
//   return vowelsCount;
// }

// console.log(countVowelsInString(str));

function findMax(arr) {
  let max = arr[0];
  arr.forEach(function (val, index) {
    if (val > max) {
      max = val;
    }
  });
  return max;
}

console.log(findMax(arrData));
