/**
 * file: js.js
 * purpose: interactivity
 * inspration from: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_video_js_prop
 **/


let myVideo = document.getElementById("myVideo");
// preload
myVideo.width = 450;
myVideo.controls = false;

// the ON / OFF trick
function playPause() {
    
  if (myVideo.paused) {
    myVideo.play();
    myVideo.controls = false;
      }
  else {
    myVideo.pause();
    myVideo.controls = true;
    }

}

function makeBig() {
    console.log('makeBig() detected a click')
    myVideo.width = 1000;
}

// eventListener for make big
big_btn.addEventListener('click', makeBig)

// muting sound
function shutUpPlease() {
    // ... logic here: write some code that will mute the video ...
    // document.getElementById("myVideo").muted = true;
    myVideo.muted = true;
}

// "unmuting" sound
function orangeAmp() {
    // ... logic here: write some code that will mute the video ...
    // document.getElementById("myVideo").muted = true;
    myVideo.muted = false;
}

function makeSmall() {
    myVideo.width = 200;
}

function makeNormal() {
    myVideo.width = 420;
}

// eventlisteners will give you fewer codelines
shutup.addEventListener('click',
  function(){
    myVideo.muted = true;
  });
