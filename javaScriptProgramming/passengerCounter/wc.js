// grab the welcome-el paragraph and store it in a variable called welcomeEl
//Create two variable (name and greeting) that contains your name
//and the greeting we want to render on the page
//render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el")
let myName = "Rogino"
let myGreeting = "Hello, "
welcomeEl.innerText = myGreeting + myName

welcomeEl.innerText += "😂"
