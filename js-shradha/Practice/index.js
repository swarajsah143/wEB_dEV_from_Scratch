let button = document.querySelector("button");
let body = document.querySelector("body");
let circle=document.querySelector("#circle")
let currMode = "light";
// console.log(button.innerText)

button.addEventListener("click", () => {
  if (currMode === "light") {
    body.classList.add("dark")
    body.classList.remove("light")
    circle.classList.add("light")
    circle.classList.remove("dark")
    currMode="dark"
  } else {
    body.classList.add("light")
    body.classList.remove("dark")
     circle.classList.add("dark")
    circle.classList.remove("light")
    currMode="light"
  }
//   console.log(currMode)
});
circle.addEventListener("mouseover", () => {
  if (currMode === "light") {
    body.classList.add("dark")
    body.classList.remove("light")
    circle.classList.add("light")
    circle.classList.remove("dark")
    currMode="dark"
  } else {
    body.classList.add("light")
    body.classList.remove("dark")
    circle.classList.add("dark")
    circle.classList.remove("light")
    currMode="light"
  }
//   console.log(currMode)
});
