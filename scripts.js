let drawSubmit = document.getElementById('drawButton')
let hitSubmit = document.getElementById('hitButton')
let tossSubmit = document.getElementById('tossButton')
let x1Line = document.getElementById('x1-y1')
let x2Line = document.getElementById('x2-y1')
let x3Line = document.getElementById('x3-y1')
let x4Line = document.getElementById('x4-y1')
let x5Line = document.getElementById('x5-y1')

let lineChoice = ''
x1Line.addEventListener('click', function(){
    console.log('Line1')
    lineChoice = '1'
})
x2Line.addEventListener('click', function(){
    console.log('Line2')
    lineChoice = '2'
})
x3Line.addEventListener('click', function(){
    console.log('Line3')
    lineChoice = '3'
})
x4Line.addEventListener('click', function(){
    console.log('Line4')
    lineChoice = '4'
})
x5Line.addEventListener('click', function(){
    console.log('Line5')
    lineChoice = '5'
})

let speedChoice = ''
drawSubmit.addEventListener('click', function(event){
    event.preventDefault()
    speedChoice = 'draw'
})

hitSubmit.addEventListener('click', function(event){
    event.preventDefault()
    speedChoice = 'hit'
})

tossSubmit.addEventListener('click', function(event){
    event.preventDefault()
    tossRock()
})

//write a function that takes the speed picked and line picked, then outputs the new rock location
const tossRock = function () {
    if (lineChoice === '1' && speedChoice ==='draw') {
        x1Line.style.background = "blue"
        console.log('1')
    } else if (lineChoice === '2' && speedChoice ==='draw') {
        x2Line.style.background = "blue"
        console.log('2')
    } else if (lineChoice === '3' && speedChoice ==='draw') {
        x3Line.style.background = "blue"
        console.log('3')
    } else if (lineChoice === '4' && speedChoice ==='draw') {
        x4Line.style.background = "blue"
        console.log('4')
    } else if (lineChoice === '5' && speedChoice ==='draw') {
        x5Line.style.background = "blue"
        console.log('5')

    } else if (lineChoice === '1' && speedChoice ==='hit') {
        if(x1Line.style.background === "blue") {
            x1Line.style.background = "red" }
        }
    else if (lineChoice === '2' && speedChoice ==='hit') {
        if(x2Line.style.background === "blue") {
            x2Line.style.background = "red" }
        } 
    else if (lineChoice === '3' && speedChoice ==='hit') {
        if(x3Line.style.background === "blue") {
            x3Line.style.background = "red" }
        }
    else if (lineChoice === '4' && speedChoice ==='hit') {
        if(x4Line.style.background === "blue") {
            x4Line.style.background = "red" }
        }
    else if (lineChoice === '5' && speedChoice ==='hit') {
        if(x5Line.style.background === "blue") {
            x5Line.style.background = "red" }
    } else {
        console.log("Pick your line and weight before shooting")
    }
}


const Rock = function (colour, speed, location) {
    this.colour = colour
    this.speed = speed
    this.location = location
}

// const red1 = new Rock('red', 0, {x:0, y:0})
// console.log(red1)