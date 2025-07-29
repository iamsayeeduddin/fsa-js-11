// let / const
// var a = 10;
// if (true) {
//   //   var a = 10;
//   console.log(a);
// }

// console.log(a);

const age = 19;
// let age = 20;
let obj2 = {};
obj2.name = "Sayeed";
// console.log(obj, age);

var add = (a, b) => a + b;

var res = add(10, 10);
console.log(res);

let obj = {
  name: "Syed",
  class: "MERN",
  duration: 4,
  modules: {
    html: true,
    css: true,
  },
};

let obj6 = {
  ...obj,
  duration: 5,
};

obj6.name = "Mohd";
obj6.modules.css = false;
console.log(obj, obj6);

const obj7 = structuredClone(obj);
obj7.name = "Sarmad";
obj.modules.html = false;
console.log(structuredClone(obj));
