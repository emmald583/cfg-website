function quack () {
    audio.play()
}

let imageClick = document.getElementById("travelduck")
let audio = new Audio('quack.mp3')
imageClick.addEventListener("click", quack)
