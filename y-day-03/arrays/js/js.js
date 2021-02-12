/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

// how to create an array
let myShoppingList = [ 
    "Bread", 
    "Butter", 
    "Milk", 
    "Cheese",
    "Veggies"
]

// test
console.log( myShoppingList )

// get one element from the list
console.log( myShoppingList[ 0 ] )

// number of list items 
console.log(myShoppingList.length)

// this will print an entire list in the console
for ( let n = 0; n < 5; n++ ){
    console.log( myShoppingList[ n ] )
}

/**
 * Let's make a gallery
 **/

// add names of all images in images
// greenman.jpg  helloween.jpg  marselis.jpg 

// my gallery
let myGallery = [
    "greenman.jpg",
    "helloween.jpg",
    "marselis.jpg",
    "snowman.png"
]

console.log( myGallery )

for (let i = 0; i < myGallery.length; i++) {
    
    // console.log(  'images/' + myGallery[ i ] )
    content.innerHTML += '<img src="images/' 
        + myGallery[ i ] 
        + '" alt="an image">'
    
}

// break till 12:55

/**
 * JavaScript and Dates (Calendars etc)
 **/
let d = new Date(); // this will define a date

console.log( "The day today is: " + d.getDay() )

let myWeek = [
    "Søndag: Closed",
    "Mandag: 09:00 - 16:30",
    "Tirsdag",
    "Onsdag: Closed",
    "Torsdag",
    "Fredag",
    "Lørdag: Closed"
]

console.log( "The day today is: " + myWeek[ d.getDay() ] )

today.innerHTML = "Today is: " + myWeek[ d.getDay() ]


// get some images - one for each month
// make a perpetual calendar that will display the correct img for the month

let myMonth = [
    "jan.jpg",
    "feb.jpg",
    "... etc ---> dec.jpg"
]

today.innerHTML += '<img src="images/' + myMonth[ d.getMonth() ] + '">'

// or via crateElement
let theImg = document.createElement("img");
theImg.src = 'images/' + myMonth[ d.getMonth() ]
today.appendChild(theImg);

