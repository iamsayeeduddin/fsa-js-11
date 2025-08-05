var root = document.getElementById("root");

setTimeout(() => {
  root.innerHTML = "<p>Hello JS DOM!</p>";
}, 2000);
console.log(root.innerText);
