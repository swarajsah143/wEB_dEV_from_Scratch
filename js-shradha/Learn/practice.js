// let h2Content=document.querySelector('h2')

// h2Content.innerText=h2Content.innerText+"from Apna College"

// divs=document.querySelectorAll(".box")
// let idx=1
// for (div of divs) {
//     div.innerText=`I am div ${idx}`
//     idx++   
//     div.style.color="black"

// }


let newBtn=document.createElement("button")
newBtn.innerText="Click me"
newBtn.style.background="red"
newBtn.style.color="white"

console.log(newBtn.innerText)

let body=document.querySelector("body")
body.prepend(newBtn)

let newClass=document.querySelector("p").classList.add('newPara')   // Here we have added another class inside paragraph  so 2 classes are there

// node.append(newBtn)
// let box1=document.querySelectorAll(".box")[0].innerText="I am box 1"
// let box2=document.querySelectorAll(".box")[1].innerText="I am box 2"
// let box3=document.querySelectorAll(".box")[2].innerText="I am box 3"

let circle=document.createElement("div")
let addUnder=document.querySelector("button")
addUnder.after(circle)
circle.innerText="Hey I am added through js"
circle.style.height="80px"
circle.style.width="80px"
circle.style.backgroundColor="yellow"
circle.style.color="black"
circle.style.borderRadius="50%"
circle.style.textAlign="center"
circle.style.overflow="hidden"


let doubleClick=document.getElementById("doubleClick")
doubleClick.ondblclick=()=>{
    alert("You Clicked twice");
    console.log("2x")
}