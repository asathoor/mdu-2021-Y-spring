/**
 * file: js.js
 * what: class Y day 02 spring 2021
 **/
console.log('JavaScript from js/js.js: up and running!')

/* DOM info */
// console.log( window  )

console.log( document )

// the DOM will change the "virtual" html that the user sees
// document.getElementById('content').innerHTML = "Mojn Verden"

// we will add an image to the DOM
let myImg = document.createElement("img")
myImg.src = "images/helloween.jpg"
let element = document.getElementById("div1")
element.appendChild(myImg)

/*
<img src="images/anImage.png">
*/

/* Variables */

let myString = "The world is wonderfull";
let myString_2 = 'Cogito ergo sum';

let myNumber = 777
let number2 = 23

let santaExists = true;
let pixiesExist = false;

let doIcare = null;

const myName = "Per";
const city = "Aarhus";

let b = "The result is: "
let c = (47 + 234) / 1.234

var a // deprecated but you may use

let z = 345
z++

let aaa = (12 + 4) / 89

let foo = document.getElementById('result')
foo.innerHTML = "<h3>The result from the jury of Timisoara is:<br><em> " + aaa + "</em><br> Isn't it.</h3>"

console.log( "now : " + aaa )


































