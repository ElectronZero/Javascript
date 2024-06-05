const prompt = require("prompt-sync")();

/*
Write a Javascipt program to generate a random numberand store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or less than the original number.
100-(no. of atempts) is the score of the user. The program is expected to terminate once the no. is guessed. Number should be between 1 to 100.
*/

const num = Math.floor((Math.random() * 100) + 1)
let cnt = 1;
while(true){
    const userInput = prompt("Enter the number: ")

    if(userInput == num){
        console.log("You have guessed it right!")
        break;
    }

    else if(userInput < num){
        console.log("The no. is greater");
    }

    else console.log("The no. is lesser");

    cnt++;
}

console.log(`Congratulations! Your score is ${100-cnt}`)



