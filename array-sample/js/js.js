/**
 * file: js.js
 * purpose: Know and use arrays
 **/
console.log('JavaScript from js/js.js: up and running!');

// A) How to define an array
let myList = [
    "Candy",
    "Beets",
    "Potatoes",
    123,
    true
]


// B) How to get one item from the array

console.log( myList )
//content.innerHTML = myList[2]

// B) How to get all items from an array
for ( let n = 0; n<myList.length; n++) {
    //console.log( n )
    content.innerHTML += '<li>' + myList[n] + '</li>'
}