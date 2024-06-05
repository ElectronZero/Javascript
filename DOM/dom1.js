document.getElementById('title')
document.getElementsByClassName('bg-black')
document.getElementById('title').innerHTML = "<h3>My name is Ayushman</h3>" //overwrite the original code

document.getElementById('title').id //'title'
document.getElementById('title').class //ERROR --> undefined
document.getElementById('title').className //'heading'
document.getElementById('title').getAttribute('id') //'title'
document.getElementById('title').getAttribute('class') //'heading'
document.getElementById('title').setAttribute('class','test') // overwrites and changes the current class attribute to 'test' from 'heading'

//So, to not overwrite-
document.getElementById('title').setAttribute('class','test heading') //does not overwrite but adds another class named 'test'

//adding styles
DataTransferItemList.style.backgroundColor = "green"
DataTransferItemList.style.padding = "20px"
DataTransferItemList.style.borderRadius = "15px"

// difference between 'textContent', 'innerHTML' and 'innerText'

title.textContent //'DOM learning on Chai aur code test text'
title.innerHTML //'DOM learning on Chai aur code <span style="display: none;">test text</span>'
title.innerText //'DOM learning on Chai aur code'

//querySelector
document.querySelector('h2') //returns the 1st h2 heading in the HTML
document.querySelector('#title') //Selecting by id
document.querySelector('.heading') //Selecting by class
document.querySelector('input[type = "password"]') //Selecting by input type(password)

//Selecting lists using querySelector and adding styles
const myul = document.querySelector('ul')
const turnGreen = myul.document.querySelector('li')
turnGreen.document.style.backgroundColor = "green"
turnGreen.document.style.padding = "20px"

turnGreen.document.innerText = "five" //changing the list 'one' to 'five'


//querySelectorAll
const val = document.querySelectorAll('li') //returns a nodelist (not an array)
val[0].style.color = "green" //Similar to array but not an array

//to apply the styling in all the nodelists
val.forEach(function (data){
    data.style.backgroundColor = "red"
})

//to implement maps on the nodelists you have to convert it into array
Array.from(val) 



const tempClassList = document.getElementsByClassName('list-item') //returns a HTMLCollection(not an array)

//converting it into array to apply loopsand other array properties
const myConvertedArray = Array.from(tempClassList)

myConvertedArray.forEach(function (val){
    val.style.color = "orange"
})

