// var root = document.getElementById("root");

// setTimeout(() => {
//   root.innerHTML = "<p>Hello JS DOM!</p>";
// }, 2000);
// console.log(root.innerText);

// var form = document.querySelector("form");
// var email = document.getElementById("email");

// const submit = (event) => {
//   event.preventDefault();
//   console.log(event);
//   console.log(email.value);
// };

// form.onsubmit = submit;

// console.log(form);

const btn = document.querySelector("#btn");
const body = document.getElementsByTagName("body");

btn.addEventListener("click", (ev) => {
  console.log(body);
  if (body[0].style.backgroundColor === "rgb(255, 25, 67)") {
    body[0].style.backgroundColor = "#ffffff";
  } else {
    body[0].style.backgroundColor = "#ff1943";
  }
  // setTimeout(() => alert("Color Changed!"), 0);
  let h1 = document.createElement("h1");
  h1.innerText = "Inserted on event of a button through JS!";

  body[0].appendChild(h1);
});
