let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissior = document.querySelector("#scissior");
let winMsg = document.querySelector(".win");
let lossMsg = document.querySelector(".loss");
let drawMsg = document.querySelector(".draw");
let resetBtn = document.querySelector(".reset-btn");
let result = document.querySelector(".result");
let userWinCount = 1;
let compWinCount = 1;
let drawCount = 1;

let comp;
let user;
rock.addEventListener("click", () => {
  user = 0;
  comp = generateComp();
  playGame();
});
paper.addEventListener("click", () => {
  user = 1;
  comp = generateComp();

  playGame();
});
scissior.addEventListener("click", () => {
  user = 2;
  comp = generateComp();
  playGame();
});

resetBtn.addEventListener("click", () => {
  winMsg.innerText = "";
  userWinCount = 0;
  lossMsg.innerText = "";
  compWinCount = 0;
  drawMsg.innerText = "";
  drawCount = 0;
  result.innerText=""
});

function generateComp() {
  return Math.floor(Math.random() * 3);
}

function playGame() {
  if (user === comp) {
    drawMsg.innerText = `Draw-${drawCount}`;
    drawCount = drawCount + 1;
    result.innerText=`It is a draw `
  } else if (user === 0 && comp === 2) {
    winMsg.classList.add("winMsg");
    winMsg.innerText = `User-${userWinCount}`;
    userWinCount = userWinCount + 1;
    result.innerText=`Congratulation! your Rock beats Scissior `

  } else if (user === 1 && comp === 0) {
    winMsg.classList.add("winMsg");
    winMsg.innerText = `User-${userWinCount}`;
    userWinCount = userWinCount + 1;
    result.innerText=`Congratulation! your Paper beats Rock `

  } else if (user === 2 && comp === 1) {
    winMsg.classList.add("winMsg");
    winMsg.innerText = `User-${userWinCount}`;
    userWinCount = userWinCount + 1;
    result.innerText=`Congratulation! your Scissior beats Paper `

  } else {
    lossMsg.classList.add("lossMsg");
    lossMsg.innerText = `Comp-${compWinCount}`;
    compWinCount = compWinCount + 1;
    result.innerText=`Oops! Computer Won! `
  }
}
