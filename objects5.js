let obj = {
  name: "Sayeed",
  class: "MERN",
  branch: "Tolichowki",
};

// console.log(Object.keys(obj));
// console.log(Object.hasOwn(obj, "room"));

const obj1 = Object.create(
  {},
  {
    branch: { value: "Tolichowki", enumerable: true, writable: true },
  }
);

obj1.branch = "Gachibowli";
console.log(obj1);
