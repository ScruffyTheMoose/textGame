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


// var to track current time in session
timeLeft = 10;


/**
 * 10-second countdown
 * To initiate, assign as an onClick effect on the "Begin" button.
 * ex: onClick='countdown("ElementIDHere")'
 */
function countdown() {

    hold = String(timeLeft);

    if (timeLeft == 0) {
        death("You ran outta time, sucker."); // TO BE CHANGED
        return;
    } else if (timeLeft < 0) {
        document.getElementById("timer").innerHTML = hold;
        return; // breaking the loop if timeLeft set to -1
    }

    timeLeft--;
    document.getElementById("timer").innerHTML = String(timeLeft);
    if (timeLeft >= 0) {
        setTimeout(countdown, 1000);
    }

    // can add param here to end all other processes if timeleft <= 0
    // easiest option is to just load to a new page

} // end timer


/**
 * Function to be called upon death.
 * TBD - make this a little more interesting...
 */
function death(note) {
    document.getElementById("div_master").innerHTML = note;
}


function win(note) {
    document.getElementById("div_master").innerHTML = note;
}


/**
 * Initial function when you click to begin.
 */
function start() {

    countdown();

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

    death("You watch as the ship continues its oncontrolled spin, breaking apart into thousands of pieces. \
    You and your crew become stranded as a result, eventually dying when you run out of resources.");

}

function opt_B() {

    // Adding the initial description of the scenario
    document.getElementById("description").innerHTML = "You approach the ship carefully, hovering near the docking port that spins rapidly infront of you.";

    // Choice A
    document.getElementById("alpha").onclick = opt_BA;
    document.getElementById("alpha").innerHTML = "Start spinning your craft to match the rotation of the docking port.";

    // Choice B
    document.getElementById("beta").onclick = opt_BB;
    document.getElementById("beta").innerHTML = "Continue observing. Maybe the ship's safety system will slow the spin.";

}

function opt_BA() {

    // Adding the initial description of the scenario

    document.getElementById("description").innerHTML = "You begin rapidly spinning in your craft until you have perfectly matched the spin of the ship.";

    // Choice A
    document.getElementById("alpha").onclick = opt_BAA;
    document.getElementById("alpha").innerHTML = "Pass control to the guidance computer to guide the ship in.";

    // Choice B
    document.getElementById("beta").onclick = opt_BAB;
    document.getElementById("beta").innerHTML = "Take the controls and attempt to manually dock. Who would trust a computer to handle this?";

}


function opt_BB() {

    death("As you sit and observe waiting for an automated system to get the spin under control, your craft is hit with debris killing your crew.");

}


function opt_BAA() {

    death("You hand control of the craft over to the guidance computer to handle the docking. The computer, however, interprets the spin as an error. \
    It slows the rotation rapidly and backs away from the spinning ship. You are forced to watch as your only hope of surival breaks apart. \
    You and your crew become stranded as a result, eventually dying when you run out of resources.");

}


function opt_BAB() {

    document.getElementById("description").innerHTML = "You don't trust the computer to handle this situation so you take the controls yourself. You carefully guide your craft in and successfully dock with the spinning ship, locking your craft in.";

    // Choice A
    document.getElementById("alpha").onclick = opt_BABA;
    document.getElementById("alpha").innerHTML = "Turn on thrusters to carefully bring the spin to a halt.";

    // Choice B
    document.getElementById("beta").onclick = opt_BABB;
    document.getElementById("beta").innerHTML = "Allow the spin to continue. Maybe trying to slow it down would cause catastrophe.";

}


function opt_BABA() {

    timeLeft = -1;

    win("Success! You manage to bring the spinning to a stop and your crew is able to safely board the ship.");

}


function opt_BABB() {

    death("You allow the spin to continue. The ship breaks apart while you are attached to it killing you and your crew.");

}