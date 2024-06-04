// Immediately Invoked Function Expressions (IIFE)

//IIFE using function
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //-->';' should be put to terminate the IIFE or else it will give ERROR in the next statements


//IIFE using arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('ayushman');

//-->ayushman is passed directly into the function and is executed as it is invoked immediately in IIFE
