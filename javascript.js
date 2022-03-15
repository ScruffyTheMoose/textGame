// var to track current time in session
timeLeft = 10;

// var to track completion
complete = false;

// var to track death
dead = false;


/**
 * 10-second countdown
 */
function countdown() {

    hold = String(timeLeft);

    if (timeLeft == 0) {
        death("You ran outta time, sucker."); // TO BE CHANGED
        return;
    }

    timeLeft--;
    document.getElementById("timer").innerHTML = String(timeLeft);
    if (timeLeft >= 0 && !complete && !dead) {
        setTimeout(countdown, 1000);
    } else if (complete) {
        document.getElementById("timer").innerHTML = "--";
        return;
    } else if (dead) {
        document.getElementById("timer").innerHTML = "--";
        return;
    }

} // end timer


/**
 * Function to be called any time the player gets killed
 * @param {death note} note 
 */
function death(note) {

    dead = true;
    document.getElementById("timer").innerHTML = "--";
    document.getElementById("div_master").innerHTML = note;

} // end death

/**
 * Function to be called if player successfully completes the game
 * @param {winning note} note 
 */
function win(note) {

    complete = true;
    document.getElementById("timer").innerHTML = "--";
    document.getElementById("div_master").innerHTML = note;

} // end win

/**
 * Function for more easily updating the html components
 * @param {text description of the current situation} situation 
 * @param {function for choice alpha} a_func 
 * @param {text description of choice alpha} a_desc 
 * @param {function for choice beta} b_func 
 * @param {text description of choice beta} b_desc 
 */
function update(situation, a_func, a_desc, b_func, b_desc) {

    // situation
    document.getElementById("description").innerHTML = situation;

    // Choice A
    document.getElementById("alpha").onclick = a_func;
    document.getElementById("alpha").innerHTML = a_desc;

    // Choice B
    document.getElementById("beta").onclick = b_func;
    document.getElementById("beta").innerHTML = b_desc;

} // end update


/**
 * Initial function when you click to begin.
 */
function start() {

    situation = "You are the pilot of a small cargo craft leaving a desolate planet in the middle of unoccupied space. \
    As you wait your turn to dock with your parent ship called 'Heighliner', another craft suddenly impacts the nose of the Heighliner throwing it into an uncontrolled spin.";
    a_desc = "Hold back to preserve your safety.";
    b_desc = "Approach the ship.";

    a_death = "You watch as the Heighliner continues its uncontrolled spin, breaking apart into thousands of pieces. You and your crew become stranded, eventually dying when you run out of resources.";

    countdown();

    update(situation, opt_A, a_desc, opt_B, b_desc);

}


function opt_A() {

    death("You watch as the Heighliner continues its uncontrolled spin, breaking apart into thousands of pieces. \
    You and your crew become stranded, eventually dying when you run out of resources.");

}

// add option to spin the wrong direction
function opt_B() {

    situation = "You approach the Heighliner carefully, hovering near the docking port that rotate clockwise infront of you.";
    a_desc = "Start spinning your craft clockwise to match the rotation of the Heighliner's docking port.";
    b_desc = "Continue observing. Maybe the ship's safety system will slow the spin.";

    update(situation, opt_BA, a_desc, opt_BB, b_desc);

}

function opt_BA() {

    situation = "You push right on your stick and begin rolling your craft clockwise until you have perfectly matched the spin of the Heighliner.";
    a_desc = "Pass control to the guidance computer to guide the ship in.";
    b_desc = "Take the controls and attempt to manually dock.";

    update(situation, opt_BAA, a_desc, opt_BAB, b_desc);

}


function opt_BB() {

    death("As you sit and observe waiting for an automated system to get the Heighliner's roll under control, your craft is hit with debris killing you and your crew.");

}


function opt_BAA() {

    death("You hand control of the craft over to the guidance computer to handle the docking. The computer, however, interprets your roll as an error. \
    It slows the rotation rapidly and backs away from the Heighliner. You are forced to watch as your only hope of surival tears itself apart. \
    You and your crew become stranded as a result, eventually dying when you run out of resources.");

}

// add option to roll wrong direction
function opt_BAB() {

    situation = "You don't trust the computer to handle this situation so you take the controls yourself. You carefully guide your craft in and successfully dock with the rolling Heighliner, locking your craft in.";
    a_desc = "Gradually turn on thrusters pointing counter-clockwise in an attempt to resolve the roll.";
    b_desc = "Allow the roll to continue. Maybe trying to slow it down would cause catastrophe.";

    update(situation, opt_BABA, a_desc, opt_BABB, b_desc);

}


function opt_BABA() {

    win("Success! You manage to bring the spinning to a stop and your crew is able to safely board the ship.");

}


function opt_BABB() {

    death("You allow the spin to continue. The ship breaks apart while you are attached to it killing you and your crew.");

}