let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = "Previous entries: "

}

function subtract(){
    count -= 1
    countEl.textContent = count
}

function add2(){
    count += 2
    countEl.textContent = count
}
function add5(){
    count += 5
    countEl.textContent = count
}
function add10(){
    count += 10
    countEl.textContent = count
}