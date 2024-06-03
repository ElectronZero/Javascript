//var c = 300 -->is not used as it can be accessed from both locally and globally
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "ayushman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


console.log(addone(5)) //No ERROR

function addone(num){
    return num + 1
}



addTwo(5) //ERROR --> cannot access addTwo before initialization as it is stored in a variable
const addTwo = function(num){  //Expression
    return num + 2
}