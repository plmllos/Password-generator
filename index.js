const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let = numberLength = 15

let firstPasswordEl = document.getElementById("first-pass")
let secondPasswordEl = document.getElementById("second-pass")
let passwordLengthEl1 = document.getElementById("length-pass1")
let passwordLengthEl2 = document.getElementById("length-pass2")
let passwordLengthEl3 = document.getElementById("length-pass3")

passwordLengthEl1.checked = false
passwordLengthEl2.checked = false
passwordLengthEl3.checked = true

function generate() {
    firstPasswordEl.textContent = ""
    secondPasswordEl.textContent = ""
    render()
}

function render() {
    for (let i = 0; i < numberLength; i++) {
        let randomNumOne = Math.floor(Math.random() * characters.length)
        let randomNumTwo = Math.floor(Math.random() * characters.length)
        firstPasswordEl.textContent += characters[randomNumOne]
        secondPasswordEl.textContent += characters[randomNumTwo]
    }
}

function setlenght5() {
        numberLength = 5
        passwordLengthEl2.checked = false
        passwordLengthEl3.checked = false
}

function setlenght10() {
        numberLength = 10
        passwordLengthEl1.checked = false
        passwordLengthEl3.checked = false
}

function setlenght15() {
        numberLength = 15
        passwordLengthEl1.checked = false
        passwordLengthEl2.checked = false
        
}