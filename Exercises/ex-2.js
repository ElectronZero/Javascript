const prompt = require("prompt-sync")();

/*
Write a Javascript program to create a game of snake,water and gun.The game should ask you to enter S,W or G and declare win or loss using alert. Use confirm and prompt  whenever required
*/

const arr = ['S','W','G']

console.log("Welcome to snake-water-gun game");
console.log("Enter S, W or G to play snake-water-gun");
while(true){
    console.log("To quit - Press 0");
    
    const userInp = prompt("Your move: ")
    const char = arr[Math.floor((Math.random() * 3) + 0)]

    const val = userInp.toUpperCase();

    if(!arr.includes(val) && userInp != 0){
        console.log("Invalid Input. Enter S, W or G");
        continue;
    } 

    console.log(`Computer move: ${char}`)
    
    if(userInp == 0){
        break;
    }
    else if(userInp.toUpperCase() == char){
        console.log("Draw!");
    }
    else if(userInp.toUpperCase() == "S" && char == "W"){
        console.log("You win: SNAKE drinks the WATER");
    }
    else if(userInp.toUpperCase() == "S" && char == "G"){
        console.log("You lose: GUN shoots the SNAKE");
    }
    else if(userInp.toUpperCase() == "W" && char == "S"){
        console.log("You lose: SNAKE drinks the WATER");
    }
    else if(userInp.toUpperCase() == "W" && char == "G"){
        console.log("You win: WATER destroys the GUN");
    }
    else if(userInp.toUpperCase() == "G" && char == "S"){
        console.log("You win: GUN shoots the SNAKE");
    }
    else if(userInp.toUpperCase() == "G" && char == "W"){
        console.log("You lose: WATER destroys the GUN");
    }

}