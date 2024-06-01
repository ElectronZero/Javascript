"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser so it will give error

console.log(3 
    +
     3) // code readability should be high

console.log("Ayushman")


let name = "Ayushman"
let age = 18
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //not same

const bigNumber = 3456543576654356754n //way to declare bignit by putting 'n' in last



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ayushman",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);  //symbol
console.log(typeof myFunction); //object function
console.log(typeof myObj); //object
console.log(typeof id); //symbol
console.log(typeof heros); //object

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ------------------------------------------------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let Myname = "Ayushman"
let anotherName = Myname

anotherName = "ayush"

console.log(Myname); 
console.log(anotherName);  //stored in Stack (copying not referenced)

let user1 = {
    email: "user@google.com",
    Age: 20
}

let user2 = user1

user2.email = "user@gmail.com"

console.log(user1.email);
console.log(user2.email);  //stored in Heap (take Reference)
