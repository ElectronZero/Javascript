console.log(Math.PI) //Fixed value, cannot be changed

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)

/* Cannot change the values or rewrite
{
  value: 3.141592653589793,
  writable: false,  
  enumerable: false,
  configurable: false
}
  */

// Custom restriction on our object

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    enumerable: false,
    writable: false
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "Coffee"
console.log(chai.name); //will not change as writable property is set to false

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
