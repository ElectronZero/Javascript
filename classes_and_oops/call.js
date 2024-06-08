function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) //should be followed for executing the full function or else the username will not be printed
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
//createUser { username: 'chai', email: 'chai@fb.com', password: '123' }