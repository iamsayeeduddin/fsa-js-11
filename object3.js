function Student(nm, course, duration, modules) {
  this.name = nm;
  this.course = course;
  this.courseDuration = duration;
  this.currentTopic = function (topic) {
    console.log(topic);
  };
  this.courseModules = modules;
}

var s1 = new Student("Sayeed", "MERN", 4, ["HTML", "CSS", "JS"]);
var s2 = new Student("Mohd", "AWS", 3, ["Linux", "Python", "AWS"]);
// s1.currentTopic();
console.log(s1, s2);
console.log(this);
