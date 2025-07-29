class Contact {
  constructor(nm, number, email) {
    this.name = nm;
    this.phoneNo = number;
    this.email = email;
    this.call = function () {
      console.log(`Calling ${this.name}!`);
    };
  }

  getWorkEmail() {
    console.log(this.email[0]);
  }
}

const contact1 = new Contact("Sayeed", 9874563210, ["email@fsa.in"]);
const contact2 = new Contact("Ahmed", 9870147210, ["email@sv.in"]);

// console.log(contact1);
// contact1.getWorkEmail();
// contact2.getWorkEmail();

class NewContact extends Contact {
  constructor(nm, nmbr, email, home, work) {
    super(nm, nmbr, email);
    this.address = {
      home,
      work,
    };
  }

  getWorkEmail() {
    console.log(`This is ${this.name}'s work email: ${this.email[0]}`);
  }
}

const contact3 = new NewContact("Umed", 96321587410, ["umaed@fsa.in"], "Tolichowki", "Hitech City");
// console.log(contact3, contact1, contact2);
// contact3.call();
contact3.getWorkEmail();
