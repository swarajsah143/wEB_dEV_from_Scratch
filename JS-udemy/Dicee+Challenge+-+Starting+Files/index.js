let randomNumber1=Math.floor(Math.random()*6)+1
let randomNumberImage1="images/dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src",randomNumberImage1)

let randomNumber2=Math.floor(Math.random()*6)+1
let randomNumberImage2="images/dice"+randomNumber2+".png"
document.querySelector(".img2").setAttribute("src",randomNumberImage2)



if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Its a Draw!"
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Left dice won."
}else{
    document.querySelector("h1").innerHTML="Right dice won"
}
