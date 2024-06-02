const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));  //upto 1 decimal (100.0)

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //default (us format 1,000,000)
console.log(hundreds.toLocaleString('en-IN')); //number representation in indian format (10,00,000)

// +++++++++++++++++++++++++++++++ Maths+++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //always in the range of 0 to 1
console.log((Math.random()*10) + 1); //to make it in the range >1 and <10
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20


//Formula to generate random numbers between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 