let resetBtn = document.querySelector("#reset-btn");
let boxes = document.querySelectorAll(".box");
let msgBox=document.querySelector(".msg-box")
let turn0 = "true";
const winPatt = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === "true") {
      box.innerText = "0";
      turn0 = "false";
    } else {
      box.innerText = "X";
      turn0 = "true";
    }
    box.disabled = true; // Now this box becomes disabled
    checkWinner();
  });
});

const checkWinner = () => {
  for (pattern of winPatt) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        msgBox.innerText=`Winner is ${pos1Val}`
        disableBoxes()
      }
    }
  }
};

let resetBox=boxes.forEach((box) => {
  resetBtn.addEventListener("click", () => {
    box.innerHTML = "";
    msgBox.innerText="";
    box.disabled=false;
  });
});
