// setInterval(() => console.log("setInterval Executed"), 1000);
// var a = 10;
// console.log(a + 10);

// var a = 10;

// setTimeout(() => (a = 19), 2000);
// console.log(a);

var add = (a, b, cb) => {
  var res;
  setTimeout(() => {
    res = a + b;
    cb(res);
  }, 2000);
  return res;
};

var subtract = (a, b, cb) => {
  var res;
  setTimeout(() => {
    res = a - b;
    cb(res);
  }, 1000);
  return res;
};

var multiply = (a, b, cb) => {
  var res;
  setTimeout(() => {
    res = a * b;
    cb(res);
  }, 2000);
  return res;
};

const callback = (res) => {
  console.log(res);
  //   return res;
};

// add(10, 20, callback);
// subtract(20, 10, callback);
// multiply(2, 10, callback);

add(10, 20, (res) => {
  console.log(res);
  subtract(res, 5, (subRes) => {
    console.log(subRes);
    multiply(10, subRes, (mulRes) => console.log(mulRes));
  });
});

// console.log(res);
