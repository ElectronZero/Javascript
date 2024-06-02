const name = "Ayushman"
const repoCount = 50

// console.log(name + repoCount + " Value");

//String Interpolation
console.log(`My name is ${name} and my repository count is ${repoCount}`); 

const gameName = new String('snake-and-ladder') //another way of declaring Strings

console.log(gameName[0]);
console.log(gameName.__proto__); //{}  --> No longer used


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ayushman    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ayush.com/ayushman%shaw"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //false
console.log(url.includes('com')) //true

console.log(gameName.split('-')); //spilt the string into arrays on the basis of '-'