# Projects related to DOM

## Project link to practice
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project-1

```javascript
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(val){
  val.addEventListener("click", function(e){
    if(e.target.id == "grey"){
      body.style.backgroundColor = "grey"
    }
    else if(e.target.id == "white"){
      body.style.backgroundColor = "white"
    }
    else if(e.target.id == "blue"){
      body.style.backgroundColor = "blue"
    }
    else if(e.target.id == "yellow"){
      body.style.backgroundColor = "yellow"
    }
  })
})

```

## Project-2

```javascript
const forms = document.querySelector("form")
const result = document.querySelector("#results")

forms.addEventListener("submit", function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)

  if(height <= 0 || isNaN(height) || height === ""){
    result.innerHTML = `ENTER A VALID INPUT`
  }
  if(weight <= 0 || isNaN(weight) || weight === ""){
    result.innerHTML = `ENTER A VALID INPUT`
  }
  else{
    const bmi = (weight/((height/100)**2)).toFixed(2)
    BMIstats(bmi)
  }
  
})

function BMIstats(bmi){
  if(bmi <= 18.6){
    result.innerHTML = `BMI: ${bmi} (UNDERWEIGHT)`
  }
  else if(bmi > 18.6 && bmi <= 24.9){
    result.innerHTML = `BMI: ${bmi} (NORMAL)`
  }
  else{
    result.innerHTML = `BMI: ${bmi} (OVERWEIGHT)`
  }
}

```

## Project-3

```javascript
const time = document.querySelector("#clock")

setInterval(function(){
  let date = new Date()
  time.innerHTML = `${date.toLocaleTimeString()}`
}, 1000)

```

## Project-4

```javascript
const submit = document.querySelector("#subt")
const guessField = document.querySelector(".guessField")
const guessSlots = document.querySelector(".guesses")
const Remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const StartOver = document.querySelector(".resultParas")

let random = Math.floor((Math.random()*100) +1)

let prevGuesses = []
let attempts = 1
let playGame = true
const p = document.createElement("p")

if(playGame){
  submit.addEventListener("click", function(s){
    s.preventDefault()
    const guess = parseInt(guessField.value)
    validateGuess(guess)
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number")
  }
  else if(guess < 1){
    alert("Enter a number greater than 1")
  }
  else if(guess > 100){
    alert("Enter a number lesser than 100")
  }
  else{
    prevGuesses.push(guess)
    if(attempts > 10){
      displayGuess(guess)
      displayMessage(`<strong>Game Over. Random number was ${random}</strong>`)
      EndGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  if(guess === random){
    displayMessage(`You guessed it right`)
  }
  else if(guess > random){
    displayMessage(`Lower`)
  }
  else if(guess < random){
    displayMessage(`Greater`)
  }
}
function displayGuess(guess){
  guessField.value = ""
  guessSlots.innerHTML += `${guess}  `
  if(attempts != 10){
    attempts++
    Remaining.innerHTML = `${11-attempts}`
  }
  else EndGame()
  
}
function displayMessage(message){
  lowOrHi.innerHTML = `<p>${message}</p>`
}
function EndGame(){
  guessField.value = ""
  guessField.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  StartOver.appendChild(p);
  playGame = false; 
  NewGame();
}
function NewGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    attempts = 1;
    guessSlots.innerHTML = '';
    Remaining.innerHTML = `${11 - attempts} `;
    guessField.removeAttribute('disabled');
    StartOver.removeChild(p);

    playGame = true;
  });
}

```

## Project-5

```javascript
const randomColor = function (){
  const range = "0123456789ABCDEF"
  let color = "#"
  for(let i = 0; i < 6; i++){
    color += range[Math.floor(Math.random() * 16)]
  }
  return color  
}

randomColor()

let StartId
const startChangingColor = function (){

  if(!StartId){
    StartId = setInterval(changeBgColor, 1000)
  }
  
  function changeBgColor(){
    document.querySelector("body").style.backgroundColor = randomColor()
  }
}

const stopChangingColor = function (){
  clearInterval(StartId)
  StartId = null
}

document.querySelector("#start").addEventListener("click",startChangingColor)

document.querySelector("#stop").addEventListener("click",stopChangingColor)
```