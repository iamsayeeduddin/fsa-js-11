var obj = {
  name: "Syed Sayeeduddin",
  course: "AWS",
  studentNo: 454543221243,
  "phone number": 6541616,
  email: {
    personal: "syed@gmail.com",
    work: "syed@fsa.com",
  },
};

delete obj.studentNo; // DELETES A PROPERTY IN THE OBJECT obj
obj.course = "MERN";
obj["academy name"] = "FSA";
delete obj["phone number"];

// console.log(obj);
var obj2 = obj;
obj.name = "Fahad Khan";
// console.log(obj2, obj);

// var a = "Sayeed";
// var b = "Syed";
// a = "Khan";
// console.log(b, a);

var obj3 = {
  name: "Fahad Khan",
};

for (var key in obj) {
  //   console.log(obj[key]);
  obj3["name"] = obj["name"];
}
obj3.name = "Sayeeduddin";
obj3.email.personal = "sayeed@gmail.com";
// console.log(obj, obj3);

console.log(JSON.stringify(obj));
var obj4 = JSON.parse(JSON.stringify(obj));

obj4.email.work = "sayeed@fsa.in";
console.log(obj, obj3, obj4);
