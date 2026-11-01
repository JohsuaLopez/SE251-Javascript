/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
const optionsHeading = document.querySelector("#options h2");
const optionsSides = document.querySelector("#options .sides");

optionsHeading.addEventListener("click", function(){
    optionsSides.classList.toggle("hidden");
});



/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
// Select both fill color inputs
const fillInputs = document.querySelectorAll("#options .fill");


fillInputs.forEach(function(input, i) {

   
    input.value = player[i].fill;
    input.nextElementSibling.innerHTML = player[i].fill;

    // Update the color when the user selects a new one
    input.addEventListener("input", function(e) {

        
        player[i].fill = e.target.value;

        
        player[i].pad.fill = player[i].fill;

        // Display the new hex code
        input.nextElementSibling.innerHTML = player[i].fill;
    });
});
/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
// Task 3 - Customizable Up Keys

// Select both players' Up key inputs
const upInputs = document.querySelectorAll("#options .u");

// Loop through both players
for (let i = 0; i < upInputs.length; i++) {

    // Display the player's current Up key
    upInputs[i].value = player[i].keys.u;

    // Display the current key in the output div
    upInputs[i].nextElementSibling.innerHTML = player[i].keys.u;

    // Change the Up key when a new key is pressed
    upInputs[i].addEventListener("keydown", function(e) {

        
        e.preventDefault();

        
        if (e.key === "Escape") {
            return;
        }

        
        upInputs[i].value = e.key;

        
        player[i].keys.u = e.key;

        
        upInputs[i].nextElementSibling.innerHTML = player[i].keys.u;
    });
    
    
    upInputs[i].addEventListener("focus", function() {
        currentState = "pause";
    });
}   
