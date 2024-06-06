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

```

## Project-3

```javascript

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