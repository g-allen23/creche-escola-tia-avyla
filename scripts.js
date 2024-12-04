let count = 1;
document.getElementById("radio1").checked = true;
const form = document.querySelector(".form")
const mask = document.querySelector(".mask")


setInterval(function() {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if(count > 4) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


function show() {
    form.style.left = "35%"
    mask.style.visibility = "visible"
}

function toHide() {
    form.style.left = "-390px"
    mask.style.visibility = "hidden"
}