/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

// here is how to make a loop
/*
for ( let i = 0; i < 10; i++ ) {
    // print out the loop
    console.log( i )
}
*/

let h = document.body.clientHeight;
let w = document.body.clientWidth;
console.log( 'w: ' + w + 't: ' + h )


// function that will make a loop run
let Many = function( howMany, theImage ){
    
    
    // here comes the loop
    for ( let i = 0; i < howMany; i++ ) {
    
        // get with and height
        
        
        // create the element
        let newDiv = document.createElement("img")
        
        // add attibutes to the element
        newDiv.src = "images/" + theImage
        newDiv.classList.add("red");
        newDiv.style.left = Math.floor( Math.random() * w) + 'px'
        newDiv.style.top = Math.floor( Math.random() * h) + 'px'
        content.appendChild(newDiv);

    }   
}

// test
Many( 17, 'Snowflake_Body.png' )

