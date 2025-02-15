const forms = document.querySelector(".form")
const mascara = document.querySelector(".mask")
const rightArrow = document.getElementById("right")
const leftArrow = document.getElementById("left")
const imgMain = document.querySelector(".carousel")

function show() {
    forms.style.left = "50%"
    forms.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}


function toHide() {
    forms.style.left = "-300px"
    forms.style.transform = "translateX(-20%)"
    mascara.style.visibility = "hidden"
}

function changeImageRight() {

    if (imgMain.src.includes("teste.jpg")) {
        imgMain.src = "assets/teste2.jpg"
    }

    else if (imgMain.src.includes("teste2.jpg")) {
        imgMain.src = "assets/teste3.jpg"
    }

    else if (imgMain.src.includes("teste3.jpg")) {
        imgMain.src = "assets/teste4.jpg"
    }

    else {
        imgMain.src = "assets/teste.jpg"
    }
}

function changeImageLeft() {

    if (imgMain.src.includes("teste4.jpg")) {
        imgMain.src = "assets/teste3.jpg"
    }

    else if (imgMain.src.includes("teste3.jpg")) {
        imgMain.src = "assets/teste2.jpg"
    }

    else if (imgMain.src.includes("teste2.jpg")) {
        imgMain.src = "assets/teste.jpg"
    }

    else {
        imgMain.src = "assets/teste4.jpg"
    }
}

leftArrow.addEventListener("click", changeImageLeft)
rightArrow.addEventListener("click", changeImageRight)
