const user = {
    username: "ayushman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //this refers to the current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this); //{}

// function chai(){
//     let username = "ayushman"
//     console.log(this.username);
// }

// chai()

//Function
const chai = function () {
    let username = "ayushman"
    console.log(this.username);  //it prints various informations
}


//Arrow Function
const coffee =  () => {
    let username = "ayushman"
    console.log(this);  //{}
}


coffee()

const add1 = (num1, num2) => {
    return num1 + num2          //Explicit return
}

const addTwo = (num1, num2) =>  num1 + num2

const add2 = (num1, num2) => ( num1 + num2 )   //Implicit return

console.log(add2(3, 4))


const objectReturn = () => ({username: "hitesh"}) //Implicit return (returning an object)

console.log(objectReturn())
