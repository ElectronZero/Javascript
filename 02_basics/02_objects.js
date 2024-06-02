// const tinderUser = new Object() --> Singleton Object
const tinderUser = {} //-->Non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


//Nested Object Literals
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayushman",
            lastname: "Shaw"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); //For accessing the inner keys

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //all the object elements of obj2 is assigned in obj1 

//{} is used for assigning all the object elements of obj1, obj2, obj4 in an empty object
// const obj3 = Object.assign({}, obj1, obj2, obj4)  


//use spread(...) just like arrays to merge all the objects
const obj3 = {...obj1, ...obj2}
console.log(obj3);


//array of objects
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
]

users[1].email //accessing an object element

// console.log(tinderUser);

console.log(Object.keys(tinderUser)); //will store all the objects keys in an array
console.log(Object.values(tinderUser)); //will store all the objects values in an array

console.log(Object.entries(tinderUser)); 
//will store the keys and values in an array of arrays    where the 1st value are keys and the 2nd values are values [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check that the given property is       available or not


const course = {
    coursename: "Merches",
    price: "999",
    courseInstructor: "Ayushman"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //Object de-structured and the key 'courseInstructor' is given another name 'instructor'

// console.log(courseInstructor);
console.log(instructor);

//JSON --> Object without a name is JSON
/*
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/


//APIs can be in array format also...
[
    {},
    {},
    {}
]
