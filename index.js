function quack () {
    audio.play()
    changingText.innerHTML = greeting
    changingText.style.color = "black"
}

let imageClick = document.getElementById("travelduck")
let audio = new Audio('quack.mp3')
let greeting = "QUACK"
let changingText = document.querySelector("h2")
imageClick.addEventListener("click", quack)
