var age = 10;

if (age > 17) {
  console.log("Eligible to get Primary License");
} else if (age > 13) {
  console.log("Eligible to get Student License");
} else {
  console.log("Not eligible to get License");
}

console.log("EELELELELLELEL");

var date = new Date(); // Date Object
console.log(date?.toISOString());
switch (date.getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
