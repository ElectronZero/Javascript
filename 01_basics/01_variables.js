const accountId = 3247657634
let accountEmail = "ayush@google.com"
var accountPassword = "64532273"
accountCity = "Kolkata"
let accountState;  //undefined

//accountId = 365723  //const variable cannot be modified

accountEmail = "ayushman@google.com"
accountPassword = "135753132"
accountCity = "Mumbai"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
