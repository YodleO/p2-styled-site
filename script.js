const red = document.getElementById("red")
const green = document.getElementById("green")
const blue = document.getElementById("blue")
const test = document.getElementById("test")

function backgroundPainter(){
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
    test.innerHTML = `Red: ${red}, Green: ${green}, Blue: ${blue}`
    
}