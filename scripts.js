let lightSubmit = document.getElementById('lightButton')
let mediumSubmit = document.getElementById('mediumButton')
let heavySubmit = document.getElementById('heavyButton')
let hitSubmit = document.getElementById('hitButton')



let tossSubmit1 = document.getElementById('tossButton1')
let tossSubmit2 = document.getElementById('tossButton2')

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
// ******
let x1y5 = document.getElementById('x1-y5')
let x2y5 = document.getElementById('x2-y5')
let x3y5 = document.getElementById('x3-y5')
let x4y5 = document.getElementById('x4-y5')
let x5y5 = document.getElementById('x5-y5')
// ****
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
    if (Math.random() > 0.5) {
        speedChoice = "5"
    } else {
        speedChoice = "6"
    }
})

mediumSubmit.addEventListener('click', function(event){
    event.preventDefault()
    if (Math.random() > 0.5) {
        speedChoice = "3"
    } else {
        speedChoice = "4"
    }
})

heavySubmit.addEventListener('click', function(event){
    event.preventDefault()
    if (Math.random() > 0.5) {
        speedChoice = "1"
    } else {
        speedChoice = "2"
    }
})


hitSubmit.addEventListener('click', function(event){
    event.preventDefault()
    speedChoice = 'hit'
})

tossSubmit1.addEventListener('click', function(event){
    event.preventDefault()
    tossRock1()
})

tossSubmit2.addEventListener('click', function(event){
    event.preventDefault()
    tossRock2()
})


// 1.make an object for each square in the grid
// 2.include speed, line, grid location and rock present = false
// 3.save user choices to a variable
// 4. write a toss rock function that loops throught he array looking for match to user selections
// 5. append color (rock) to grid location accordingly

let team1 = [{
    colour: "red",
    score: 0,
    rocksRemaining: 8
}]

let team2 = [{
    colour: "blue",
    score: 0,
    rocksRemaining: 8
}]

let rockData = [{

    rockSpeed : "1",
    rockLine : "1",
    location : x1y1,
    present : false,

},{


    rockSpeed : "1",
    rockLine : "2",
    location : x2y1,
    present : false,

},{

    rockSpeed : "1",
    rockLine : "3",
    location : x3y1,
    present : false,

},{

    rockSpeed : "1",
    rockLine : "4",
    location : x4y1,
    present : false,

},{

    rockSpeed : "1",
    rockLine : "5",
    location : x5y1,
    present : false,

},

{

    rockSpeed : "2",
    rockLine : "1",
    location : x1y2,
    present : false,

},{

    rockSpeed : "2",
    rockLine : "2",
    location : x2y2,
    present : false,

},{

    rockSpeed : "2",
    rockLine : "3",
    location : x3y2,
    present : false,

},{

    rockSpeed : "2",
    rockLine : "4",
    location : x4y2,
    present : false,

},{

    rockSpeed : "2",
    rockLine : "5",
    location : x5y2,
    present : false,

},{

    rockSpeed : "3",
    rockLine : "1",
    location : x1y3,
    present : false,

},{

    rockSpeed : "3",
    rockLine : "2",
    location : x2y3,
    present : false,

},{

    rockSpeed : "3",
    rockLine : "3",
    location : x3y3,
    present : false,

},{

    rockSpeed : "3",
    rockLine : "4",
    location : x4y3,
    present : false,

},{

    rockSpeed : "3",
    rockLine : "5",
    location : x5y3,
    present : false,

},{

    rockSpeed : "4",
    rockLine : "1",
    location : x1y4,
    present : false,

}, {

    rockSpeed : "4",
    rockLine : "2",
    location : x2y4,
    present : false,

}, {

    rockSpeed : "4",
    rockLine : "3",
    location : x3y4,
    present : false,

}, {

    rockSpeed : "4",
    rockLine : "4",
    location : x4y4,
    present : false,

}, {

    rockSpeed : "4",
    rockLine : "5",
    location : x5y4,
    present : false,

}, {

    rockSpeed : "5",
    rockLine : "1",
    location : x1y5,
    present : false,

}, {

    rockSpeed : "5",
    rockLine : "2",
    location : x2y5,
    present : false,

}, {

    rockSpeed : "5",
    rockLine : "3",
    location : x3y5,
    present : false,

}, {

    rockSpeed : "5",
    rockLine : "4",
    location : x4y5,
    present : false,

}, {

    rockSpeed : "5",
    rockLine : "5",
    location : x5y5,
    present : false,

}, {

    rockSpeed : "6",
    rockLine : "1",
    location : x1y6,
    present : false,

}, {

    rockSpeed : "6",
    rockLine : "2",
    location : x2y6,
    present : false,

}, {

    rockSpeed : "6",
    rockLine : "3",
    location : x3y6,
    present : false,

}, {

    rockSpeed : "6",
    rockLine : "4",
    location : x4y6,
    present : false,

}, {

    rockSpeed : "6",
    rockLine : "5",
    location : x5y6,
    present : false,

}


]

// Check if there is a rock in the path of the thrown rock
// If there is, tap the rock in the way to the original location and replace with new rock
// else populate original location with new rock

//replace .forEach() with for loop to include multiple if statements.

const tossRock1 = function () {
    rockData.forEach(rock => {
        if (rock.rockLine === lineChoice && rock.rockSpeed === speedChoice && rock.present === false) rock.location.style.background = "blue", rock.present = true})
    
    rockData.forEach(rock => {
        if (rock.rockLine === lineChoice && speedChoice === 'hit' && rock.present === true) rock.location.style.background = "blue", rock.present = false})
    
    rockData.forEach(rock => {
        if(rock.rockLine === lineChoice && rock.present === true && rock.rockSpeed > speedChoice && rock.location.style.background === "blue") rock.location.style.background = "blue", rock.present = true})
    rockData.forEach(rock => {
        if(rock.rockLine === lineChoice && rock.present === true && rock.rockSpeed > speedChoice && rock.location.style.background === "red") rock.location.style.background = "blue", rock.present = true})
            
}

const tossRock2 = function () {
    rockData.forEach(rock => {
        if (rock.rockLine === lineChoice && rock.rockSpeed === speedChoice && rock.present === false) rock.location.style.background = "red", rock.present = true})
    
    rockData.forEach(rock => {
        if (rock.rockLine === lineChoice && speedChoice === 'hit' && rock.present === true) rock.location.style.background = "red", rock.present = false})
    
    rockData.forEach(rock => {
        if(rock.rockLine === lineChoice && rock.present === true && rock.rockSpeed > speedChoice && rock.location.style.background === "red") rock.location.style.background = "red", rock.present = true})
    rockData.forEach(rock => {
        if(rock.rockLine === lineChoice && rock.present === true && rock.rockSpeed > speedChoice && rock.location.style.background === "blue") rock.location.style.background = "red", rock.present = true})
        
}




    //  *******************************HITZZZZZZZZZZZ*******************************

    // } else if (lineChoice === '1' && speedChoice ==='hit') {
    //     if(x1y1.style.background === "blue") {
    //         x1Line.style.background = "red" }
    //     } else if (x2y1.style.background === "blue") {
    //         x2y1.style.background = "red" }
    // else if (lineChoice === '2' && speedChoice ==='hit') {
    //     if(x2Line.style.background === "blue") {
    //         x2Line.style.background = "red" }
    //     } 
    // else if (lineChoice === '3' && speedChoice ==='hit') {
    //     if(x3Line.style.background === "blue") {
    //         x3Line.style.background = "red" }
    //     }
    // else if (lineChoice === '4' && speedChoice ==='hit') {
    //     if(x4Line.style.background === "blue") {
    //         x4Line.style.background = "red" }
    //     }
    // else if (lineChoice === '5' && speedChoice ==='hit') {
    //     if(x5Line.style.background === "blue") {
    //         x5Line.style.background = "red" }
    // } else {
    //     console.log("Pick your line and weight before shooting")
    // }


    //  *******************************HITZZZZZZZZZZZ*******************************




