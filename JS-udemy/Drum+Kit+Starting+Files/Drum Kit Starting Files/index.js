DrumButtonNum = document.querySelectorAll(".drum").length
for (let i = 0; i < DrumButtonNum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleDrum)



}

function handleDrum() {
    // console.log(this.innerHTML)   it takes inner html wherever I click 

    let buttonInnerHTML = this.innerHTML   
    switch (buttonInnerHTML) {
        case "w":
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;
        case "a":
            kick = new Audio('sounds/kick-bass.mp3')
            kick.play()
            break;
        case "s":
            snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;
        case "d":
            tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;
        case "j":
            tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;
        case "k":
            tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
        case "l":
            crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;
        default: console.log(buttonInnerHTML)

    }

}

