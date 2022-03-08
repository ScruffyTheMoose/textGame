/**
 * Example function to change the value of some element
 */
function changeOutline() {

    value = document.getElementById("ENTERIDHERE").innerHTML;

    if (value == 0) {
        document.getElementById("ELEMENTIDHERE").innerHTML = "do a thing"
    }

    console.log("changed " + value)

}


/**
 * 10-second countdown
 * To initiate, assign as an onClick effect on the "Begin" button.
 * ex: onClick='countdown("ElementIDHere")'
 */
timeLeft = 11;

function countdown(id) {

    timeLeft--;
    document.getElementById(id).innerHTML = String(timeLeft);
    if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    }

    // can add param here to end all other processes if timeleft <= 0
    // easiest option is to just load to a new page

} // end timer


/**
 * Function to be called upon death.
 * TBD - make this a little more interesting...
 */
function death() {
    document.getElementById("div_master").innerHTML = "YOU DIED"
}


/**
 * Initial function when you click to begin.
 */
function start() {

    // Adding the initial description of the scenario
    document.getElementById("description").innerHTML = "You wait your turn to dock with the ship when suddenly another craft impacts the body of the ship and causes an explosion, throwing the ship into an uncontrolled spin.";

    // Choice A
    document.getElementById("alpha").onclick = opt_A;
    document.getElementById("alpha").innerHTML = "Hold back to preserve your safety.";

    // Choice B
    document.getElementById("beta").onclick = opt_B;
    document.getElementById("beta").innerHTML = "Approach the ship.";

}


function opt_A() {

    // Adding the initial description of the scenario
    document.getElementById("description").innerHTML = "You watch as the ship continues its oncontrolled spin, breaking apart into thousands of pieces. \
    You and your crew become stranded as a result, eventually dying when you run out of resources.";

    // Choice A
    document.getElementById("alpha").onclick = "";
    document.getElementById("alpha").innerHTML = "";

    // Choice B
    document.getElementById("beta").onclick = "";
    document.getElementById("beta").innerHTML = "";

}