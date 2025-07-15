// LLD
var contact = {
  "contact name": {
    first: "Syed",
    middle: "",
    last: "Sayeeduddin",
    nick: "",
  },
  phoneNo: {
    work: 98744563210,
    personal: 6987454123,
  },
  email: ["iamsayeeduddin@gmail.com", "syed@fsa.com"],
  address: "Tolichowki",
  call: function () {
    // console.log("Calling Sayeed.....!");
    return "Calling Sayeed.....!";
  },
};

// var fullName = contact.name.first + " " + contact.name.middle + " " + contact.name.last;

console.log(contact.call());
