
//number of circles we have in the game
var numCircles = 6;
//The colour variable should be an array that contains as many random RGB colours as there are circles. 
var colours = [];
//This pickedColor is the RGB color we are trying to guess (string)
var pickedColor;
//This is the default colour of the game. 
let defaultColour="#582c99"

//Grab all appropriate elements from the HTML.
var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colourToGuess");
var resultMessage = document.getElementById("resultMessage");
var banner = document.querySelector("h1");
var resetButton = document.getElementById("resetButton");


init();

//The init function should reset the stage and set a new RGB color
function init() {
    // Call the reset function to set up the initial game state
    reset();

    // Setup so that when the reset button is clicked, the reset function gets called
    resetButton.addEventListener("click", reset);

    // Define what should happen when any circle is clicked
    for (var i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", clickCircle);
    }
}

//Define what should happen when any circle is clicked. 
//When a circle is clicked, it should check if the color of a circle 
//is the same as the color to be guessed. If it is, you have won. You should set 
// the display message to "You win", change the text of the reset button to "Play again"
// and set the color of each circle and of the banner to be the color we were guessing. 
// If the color you clicked on was incorrect, you should set the color of the circle you just clicked to be the default color 
// and change the result text to be "Try again"
function clickCircle() {

    // Get the clicked circle's color
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
        resultMessage.textContent = "You win!";
        resetButton.textContent = "Play again";
        
        // Manually change the color of all circles and banner
        for (var i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = pickedColor;
        }
        banner.style.backgroundColor = pickedColor;
    } else {
        this.style.backgroundColor = defaultColour;
        resultMessage.textContent = "Try again";
    }
}

// The reset function should set new values for the colours array by calling genRandomColours.
// pick a color from these and set it as the color you are trying to pick. This color 
// should be obtained by calling chooseColor.
// Display the colour RGB value on the main page.
// Set the colour of the circles to the random colors you generated. 
// Set the color of the banner to the default color, set the text of the reset
// button to "Restart" and the result text to an empty String. 
// Ensure that if a circle is clicked that the clickCircle function is called. 
function reset() {

    // Generate a new set of random colours
    colours = genRandomColours();

    // Pick a new random color to be guessed
    pickedColor = chooseColor();

    // Display the RGB color value of the picked color on the page
    colourToGuess.textContent = pickedColor;

    // Set the color of the circles to the random colors generated
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colours[i];
    }

    // Reset banner color, button text, and result message
    banner.style.backgroundColor = defaultColour;
    resetButton.textContent = "Restart";
    resultMessage.textContent = "";
}

//Write a function to make a random RGB color. For RGB colours are 
// made up of 3 values from 0 to 256. You should basically generate 3 random 
// numbers and create a string "rgb(0,0,0)" but replace the 0 with random values. 
//return that string
function makeColour() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


// Write a function that will set new values for the colours array.
// It should contain as many RGB color strings as there are circles
function genRandomColours() {
    var arr = [];
    for (var i = 0; i < numCircles; i++) {
        arr.push(makeColour());
    }
    return arr;
}

//return one of the 6 RGB colours you created and stored in colours
// this function should set the colour you are guessing.
function chooseColor() {
    var randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];	
}



