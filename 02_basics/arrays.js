

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//++++++++++++++++++++++++++++Array methods+++++++++++++++++++++++++++++++

myArr.push(6)
console.log(myArr)

myArr.push(7)
console.log(myArr)

myArr.pop()
console.log(myArr)  //removes the last inserted element from the array

myArr.unshift(9)
console.log(myArr)  //pushes the element in the first(shift the whole array) 

myArr.shift()
console.log(myArr) //pops the 1st element


console.log(myArr.includes(9)); 
console.log(myArr.indexOf(3));

const newArr = myArr.join() //converts the array into string

console.log( newArr)
console.log(typeof newArr) //string


//++++++++++++++++++++++++++ slice, splice methods +++++++++++++++++++

//In slice(i,j) method it will return a copy of the array staring from i to (j-1)
//Original array is not changed

console.log("A ", myArr);  //[0,1,2,3,4,5,6]
const myn1 = myArr.slice(1, 3)   

console.log(myn1); //[1,2]
console.log("B ", myArr); //[0,1,2,3,4,5,6]

//In splice(i,j) method it returns an array starting from i to j
//It changes the original array

const myn2 = myArr.splice(1, 3) 
console.log("C ", myArr); //[0,4,5,6]
console.log(myn2); //[1,2,3]




const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

/*

marvel_heros.push(dc_heros) //pushes the whole array (dc_heros) as an element

console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]); //flash

*/
const allHeros = marvel_heros.concat(dc_heros) //merges the 2 arrays (works for only merging 2 arrays)
console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//Instead use spread(...) for merging (can handle any no. of arrays)

const all_new_heros = [...marvel_heros, ...dc_heros] 
console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//arrays in an array
//Depths- No. of layers of arrays in an array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //Depth = 2

//flat(Depth) method makes the whole array flat
//Depths = Infinity --> if you don't know the depths 
const real_another_array = another_array.flat(Infinity) //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
console.log(real_another_array)


console.log(Array.isArray("Ayush")) //returns boolean if the passed value is an array
console.log(Array.from("Ayush")) //converts the passed value into an array

console.log(Array.from({name: "Ayush"})) // can also convert objects into array according to the keys or values(shall be disscussed ahead)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements