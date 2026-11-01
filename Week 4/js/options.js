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

// Customize the six keys, and pause when customizing

function setupKeyInputs(className, keyName) {
    const inputs = document.querySelectorAll("#options ." + className);

    for (let i = 0; i < inputs.length; i++) {

        // Display the current key
        inputs[i].value = player[i].keys[keyName];
        inputs[i].nextElementSibling.innerText = player[i].keys[keyName];

        // Pause when selecting the input
        inputs[i].addEventListener("focus", function() {
            currentState = "pause";
        });

        // Assign a new key
        inputs[i].addEventListener("keydown", function(e) {
            e.preventDefault();

            if (e.key === "Escape") return;

            player[i].keys[keyName] = e.key;
            inputs[i].value = e.key;
            inputs[i].nextElementSibling.innerText = e.key;
        });
    }
}

setupKeyInputs("u", "u");
setupKeyInputs("d", "d");
setupKeyInputs("s", "s");