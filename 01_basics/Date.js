// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.getMonth);
console.log(myDate.toLocaleDateString);
console.log(myDate.toTimeString);
console.log(myDate.toLocaleTimeString);
console.log(typeof myDate);  //object
 
let myCreatedDate = new Date()
let myCreatedDate1 = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()  //always in miliseconds calculated from 1970 till now

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));  //to convert the millisecond in seconds(floor value)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //month counting started from 0, so +1 (January-->0)
console.log(newDate.getDay()); //sunday-->0

// `${newDate.getDay()} and the time `



console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day:"2-digit",
    year:"2-digit",    
    
}));
