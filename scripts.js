let lightSubmit = document.getElementById('lightButton')
let mediumSubmit = document.getElementById('mediumButton')
let heavySubmit = document.getElementById('heavyButton')
let hitSubmit = document.getElementById('hitButton')

let tossSubmit = document.getElementById('tossButton')

let x1y1 = document.getElementById('x1-y1')
let x2y1 = document.getElementById('x2-y1')
let x3y1 = document.getElementById('x3-y1')
let x4y1 = document.getElementById('x4-y1')
let x5y1 = document.getElementById('x5-y1')
let x1y2 = document.getElementById('x1-y2')
let x2y2 = document.getElementById('x2-y2')
let x3y2 = document.getElementById('x3-y2')
let x4y2 = document.getElementById('x4-y2')
let x5y2 = document.getElementById('x5-y2')
let x1y3 = document.getElementById('x1-y3')
let x2y3 = document.getElementById('x2-y3')
let x3y3 = document.getElementById('x3-y3')
let x4y3 = document.getElementById('x4-y3')
let x5y3 = document.getElementById('x5-y3')
let x1y4 = document.getElementById('x1-y4')
let x2y4 = document.getElementById('x2-y4')
let x3y4 = document.getElementById('x3-y4')
let x4y4 = document.getElementById('x4-y4')
let x5y4 = document.getElementById('x5-y4')
let x1y6 = document.getElementById('x1-y6')
let x2y6 = document.getElementById('x2-y6')
let x3y6 = document.getElementById('x3-y6')
let x4y6 = document.getElementById('x4-y6')
let x5y6 = document.getElementById('x5-y6')
let x1y7 = document.getElementById('x1-y7')
let x2y7 = document.getElementById('x2-y7')
let x3y7 = document.getElementById('x3-y7')
let x4y7 = document.getElementById('x4-y7')
let x5y7 = document.getElementById('x5-y7')




let lineChoice = ''
x1y1.addEventListener('click', function(){
    lineChoice = '1'
})
x2y1.addEventListener('click', function(){
    lineChoice = '2'
})
x3y1.addEventListener('click', function(){
    lineChoice = '3'
})
x4y1.addEventListener('click', function(){
    lineChoice = '4'
})
x5y1.addEventListener('click', function(){
    lineChoice = '5'
})

let speedChoice = ''
lightSubmit.addEventListener('click', function(event){
    event.preventDefault()
    speedChoice = 'light'
})

mediumSubmit.addEventListener('click', function(event){
    event.preventDefault()
    speedChoice = 'medium'
})

heavySubmit.addEventListener('click', function(event){
    event.preventDefault()
    speedChoice = 'heavy'
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
    if (lineChoice === '1' && speedChoice ==='heavy') {
        if (Math.random() > 0.5) {
            x1y1.style.background = "blue"
        } else {
            x1y2.style.background = "blue"
        }
        
    } else if (lineChoice === '2' && speedChoice ==='heavy') {
        x2Line.style.background = "blue"
    } else if (lineChoice === '3' && speedChoice ==='heavy') {
        x3Line.style.background = "blue"
    } else if (lineChoice === '4' && speedChoice ==='heavy') {
        x4Line.style.background = "blue"
    } else if (lineChoice === '5' && speedChoice ==='heavy') {
        x5Line.style.background = "blue"

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


const allRedRocks = []

let red1 = new Rock('red', 0, {x:0, y:0})
let red2 = new Rock('red', 0, {x:0, y:0})
let red3 = new Rock('red', 0, {x:0, y:0})
let red4 = new Rock('red', 0, {x:0, y:0})
let red5 = new Rock('red', 0, {x:0, y:0})
let red6 = new Rock('red', 0, {x:0, y:0})
let red7 = new Rock('red', 0, {x:0, y:0})
let red8 = new Rock('red', 0, {x:0, y:0})

let blue1 = new Rock('blue', 0, {x:0, y:0})
let blue2 = new Rock('blue', 0, {x:0, y:0})
let blue3 = new Rock('blue', 0, {x:0, y:0})
let blue4 = new Rock('blue', 0, {x:0, y:0})
let blue5 = new Rock('blue', 0, {x:0, y:0})
let blue6 = new Rock('blue', 0, {x:0, y:0})
let blue7 = new Rock('blue', 0, {x:0, y:0})
let blue8 = new Rock('blue', 0, {x:0, y:0})

console.log(blue1);

// console.log(red1)
const allRocks = [
    
    {
  
    lineChoice: 1,
    speed: draw,
    value: 1,

    },
    
    {
    lineChoice: 2,
    speed: draw,
    value: 2,

    }



]

