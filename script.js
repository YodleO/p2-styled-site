const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const end = document.getElementById("end")



function averager(){
    let f = parseInt(first.value)
    let s = parseInt(second.value)
    let t = parseInt(third.value)
    //document.body.style.backgroundColor = `rgb(${r},${},${b})`
    //test.innerHTML = `Red: ${r}, Green: ${g}, Blue: ${b}`
    let average = (f + s + t) / 3
    end.innerHTML = `Average: ${average}`
    
}