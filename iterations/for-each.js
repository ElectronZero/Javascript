const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){ //--> call-back function (function without a name),
                                //any name can be given in the parameters of the call-back function
    console.log(val); //prints the array
} )

coding.forEach( (item) => {  //Arrow function can also be used (without a name)
    console.log(item);
} )

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)  //can also work in this way...(only the reference is passed)

coding.forEach( (item, index, arr)=> { //forEach can have more parameters like these 3
    console.log(item, index, arr);
} )

//array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName); //prints all the languageName of all the objects
} )