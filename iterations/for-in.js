const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//As Objects are not iterable, so for-in loops are used instead of for-of
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]); //the index of the array would only be printed if key is printed
                                   //i.e, 0 1 2 3 4
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); //will not work as maps are not iterable
}