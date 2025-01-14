const forms = document.querySelector(".form")
const mascara = document.querySelector(".mask")

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