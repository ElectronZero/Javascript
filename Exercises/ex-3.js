/*
Faulty Calculator
+ --> -
* --> +
- --> /
/ --> **

It performs wrong operations 10% of the time
*/

const prompt = require("prompt-sync")();

const firstNum = parseInt(prompt("Enter the first no. "))
const secondNum = parseInt(prompt("Enter the second no. "))
const operation = prompt("Enter the operation ")
arr = ["+","-","*","/","**","^"]
const probability = Math.random()*10
console.log(probability)

if(probability < 1){
    faultyCalculator(firstNum, secondNum, operation)
}
else{
    goodCalculator(firstNum, secondNum, operation)
}

function goodCalculator(firstNum, secondNum, operation){

    if(!arr.includes(operation)){
        console.log("Enter a valid input")
    }
    else if(operation === "+"){
        console.log(firstNum + secondNum)
    }
    else if(operation === "-"){
        console.log(firstNum - secondNum);
    }
    else if(operation === "*"){
        console.log(firstNum * secondNum);
    }
    else if(operation === "/"){
        console.log(firstNum / secondNum);
    }
    else if(operation === "**" || operation === "^"){
        console.log(firstNum ** secondNum);
    }
}

function faultyCalculator(firstNum, secondNum, operation){
    if(!arr.includes(operation)){
        console.log("Enter a valid input")
    }
    else if(operation === "+"){
        console.log(firstNum - secondNum)
    }
    else if(operation === "-"){
        console.log(firstNum / secondNum);
    }
    else if(operation === "*"){
        console.log(firstNum + secondNum);
    }
    else if(operation === "/"){
        console.log(firstNum ** secondNum);
    }
    else if(operation === "**" || operation === "^"){
        console.log(firstNum * secondNum);
    }
}




