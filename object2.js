var employee = {
  empName: "Talha Ahmed",
  empNo: 987,
  empDepartment: "Infrastructure",
  empSalary: 48000,
  empDetails: function () {
    console.log("This is an employee of " + this.empDepartment + " Dept.");
  },
  incrementSalary: function (incAmt) {
    this.empSalary += incAmt;
    // this.empSalary = this.empSalary + incAmt;
  },
};

employee.incrementSalary(6000);
console.log(this);
