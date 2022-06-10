//document.getElementById("count-el").innerText = 5

// let a = 5
// let b = 10
// let c = a + b
// console.log(c)


// 1. create a variable, myAge, and set its value to your age
// 2. log the myAge variable to the console
// let myAge = 25
// console.log(myAge)

// 1. create two variable, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console
// let myAge = 25
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)


// 1. Create a variable, bonusPoints. Initialize it as 50. Increase it to a hundred
// 2. Decrease it down to 25, and then finally increase it to 70
// 3. Console log the value after each step.
// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment(){
//     alert("The Button was clicked!!")
// }

//function call
// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1) 
// }
// countdown()

//create a function (you decide the name) that logs out the number 42 to the console
//call/invoke the function
// function firstFunc(){
//     console.log(42)
// }
// firstFunc()

//create a function the logs out the sum of all the lap times
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function lapSum(){
//     sum = lap1 + lap2 + lap3
//     console.log(sum)
// }
// lapSum()

//create a function that increments the lapsCompleted variable with one
//run it three times
// let lapsCompleted = 0
// function lapCount(){
//     lapsCompleted = lapsCompleted + 1
// }
// lapCount()
// lapCount()
// lapCount()
// console.log(lapsCompleted)

//on click implement=============
//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked(log it out)
//change the count-el in the HTML to reflect the new count
//on click implement=============
//PROJECT SOURCE CODE ================================
countEl = document.getElementById("count-el")
countP = document.getElementById("history-p")
r1d1 = document.getElementById("r1d1")
let count = 0 
let today = new Date()
let dd = today.getDate()
let mm = today.getMonth() + 1
let yyyy = today.getFullYear()
todayIs = `${dd}/${mm}/${yyyy}`

function increment(){
    count += 1
    countEl.innerHTML = count
}
function clear_it(){
    countEl.innerHTML = 0
    count = 0
}
//on click save implement
//1. create a function, save(), which logs out the count when it's called
function save(){
    let historyP = count + " - "
    countP.innerHTML += historyP
    r1d1.innerHTML = todayIs
    r1d2.innerHTML = count
}




//exercises ===========================================
//strings
let username = "per"
console.log(username)

// create a variable, message, that stores the string: "You have tree new notifications"

let notifications = "You have 3 New notifications"
console.log(username + "," +  notifications +"!")

//Create a variable, messageToUser, that contains the message we have logged

let messageToUser = username + "," +  notifications +"!"
console.log(messageToUser)

// create two variables, name and greeting. The name variable should store your name.
//and the greeting should store e.g "Hi, my name is"
//create a third variable, myGreeting, that concatenates the two strings
//log myGreeting to the console

let myName = "Rogino"
let greeting = "Hi, my name is "
let myGreeting = greeting + myName
console.log(myGreeting)

//9
//24
//51
//100100

console.log(4+5)
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")

//Render a welcome message