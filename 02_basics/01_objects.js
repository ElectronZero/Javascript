// singleton --> Object is declared using Contructor
// Object.create --> Used in Singleton for creating objects

// object literals

const mySym = Symbol("key1")  //declaring a symbol


const JsUser = {
    name: "Ayushman",
    "full name": "Ayushman Shaw",
    mySym: "mykey1",  //will interpret the key as a string not symbol
    [mySym]: "mykey1",   // if you want to interpret the key as a symbol
    age: 18,
    location: "Kolkata",
    email: "ayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] //can declare an array
}

console.log(JsUser.email)  //general way of accessing
console.log(JsUser["email"]) //also a method to access

console.log(JsUser["full name"])  //only way
console.log(JsUser[mySym]) //necessary for representing a symbol as a symbol not string

JsUser.email = "ayush@chatgpt.com"
//Object.freeze(JsUser) //freezes or lock the object from further changes
JsUser.email = "ayush@microsoft.com"
// console.log(JsUser);


//also can add a function in an object
JsUser.greeting = function(){  
    console.log("Hello JS user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //to reference a key in an object (should use '`')
                                                 //must use 'this' as it refers the current context of the object
}

console.log(JsUser.greeting); //only a function reference is returned
//[Function (anonymous)]


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); //Hello JS user, Ayushman