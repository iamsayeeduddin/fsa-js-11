function Student(nm, course, duration, modules) {
  this.name = nm;
  this.course = course;
  this.courseDuration = duration;
  this.currentTopic = function (topic) {
    console.log(topic);
  };
  this.courseModules = modules;
}

Student.prototype.count = 1;

var s1 = new Student("Sayeed", "MERN", 4, ["HTML", "CSS", "JS"]);
var s2 = new Student("Mohd", "AWS", 3, ["Linux", "Python", "AWS"]);
Student.prototype.record = 0;
// s1.currentTopic();
console.log(s1.record, s2.record);
// console.log(this);
