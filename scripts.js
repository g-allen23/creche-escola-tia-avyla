const forms = document.querySelector(".form")
const mascara = document.querySelector(".mask")
const rightArrow = document.getElementById("right")

function show(){
    forms.style.left = "50%"
    forms.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}


function toHide(){
    forms.style.left = "-300px"
    forms.style.transform = "translateX(-20%)"
    mascara.style.visibility = "hidden"
}

function changeImageRight() {
    const imgMain = document.querySelector(".carousel")

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

rightArrow.addEventListener("click", changeImageRight)