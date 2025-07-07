var email = "er.sayeed.uddin@email.com";

var atIndex = email.indexOf("@"); // -1
var atLastIndex = email.lastIndexOf("@");

if (atIndex > 0) {
  if (atIndex === atLastIndex) {
    if (atIndex < email.length - 1) {
      var beforeAt = email.slice(0, atIndex);
      var afterAt = email.slice(atIndex + 1);
      var dotAt = afterAt.indexOf(".");
      if (dotAt > 0) {
        if (dotAt !== afterAt.length - 1) {
          console.log("Email is Valid!");
        } else {
          console.log("Email is Invalid!");
        }
      } else {
        console.log("Email is Invalid!");
      }
    } else {
      console.log("Email is Invalid!");
    }
  } else {
    console.log("Email is Invalid!");
  }
} else {
  console.log("Email is Invalid!");
}
