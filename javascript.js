// var to track current time in session
timeLeft = 10;

// var to track completion
complete = false;

// var to track death
dead = false;

// rgb vals for clock
red = 0;
green = 150;


/**
 * 10-second countdown
 */
function countdown() {

    if (timeLeft == 0 && !complete && !dead) {
        death("You wasted too much time and got everyone killed.");
        return;
    }

    timeLeft--;
    document.getElementById("timer").innerHTML = String(timeLeft);
    if (timeLeft >= 0 && !complete && !dead) {
        red += 20;
        green -= 25;
        document.getElementById("clock").style.backgroundColor = `rgb(${red}, ${green}, 0)`
        setTimeout(countdown, 1000);
    } else if (complete) {
        document.getElementById("timer").innerHTML = "--";
        return;
    } else if (dead) {
        document.getElementById("timer").innerHTML = "--";
        return;
    }

} // end timer


function hide_buttons() {

    document.getElementById("cont_a").style.display = "none";
    document.getElementById("cont_b").style.display = "none";
    document.getElementById("cont_c").style.display = "none";

}


/**
 * Function to be called any time the player gets killed
 * @param {death note} note 
 */
function death(note) {

    dead = true;
    document.getElementById("timer").innerHTML = "--";
    document.getElementById("description").innerHTML = note;
    hide_buttons();

} // end death


/**
 * Function to be called if player successfully completes the game
 * @param {winning note} note 
 */
function win(note) {

    complete = true;
    document.getElementById("timer").innerHTML = "--";
    document.getElementById("div_master").innerHTML = note;
    hide_buttons();

} // end win


/**
 * Function for more easily updating the html components
 * @param {text description of the current situation} situation 
 * @param {function for choice a} a_func 
 * @param {text description of choice a} a_desc 
 * @param {function for choice b} b_func 
 * @param {text description of choice b} b_desc 
 * @param {function for choice c} c_func 
 * @param {text description of choice c} c_desc 
 */
function update3(situation, a_func, a_desc, b_func, b_desc, c_func, c_desc) {

    // situation
    document.getElementById("description").innerHTML = situation;

    // Choice A
    document.getElementById("a").onclick = a_func;
    document.getElementById("a").innerHTML = a_desc;

    // Choice B
    document.getElementById("b").onclick = b_func;
    document.getElementById("b").innerHTML = b_desc;
    document.getElementById("cont_b").style.display = "block";

    // Choice C
    document.getElementById("c").onclick = c_func;
    document.getElementById("c").innerHTML = c_desc;
    document.getElementById("cont_c").style.display = "block";

} // end update3


/**
 * Function for more easily updating the html components
 * @param {text description of the current situation} situation 
 * @param {function for choice a} a_func 
 * @param {text description of choice a} a_desc 
 * @param {function for choice b} b_func 
 * @param {text description of choice b} b_desc 
 */
function update2(situation, a_func, a_desc, b_func, b_desc) {

    // situation
    document.getElementById("description").innerHTML = situation;

    // Choice A
    document.getElementById("a").onclick = a_func;
    document.getElementById("a").innerHTML = a_desc;

    // Choice B
    document.getElementById("b").onclick = b_func;
    document.getElementById("b").innerHTML = b_desc;

    // hide C
    document.getElementById("cont_c").style.display = "none";

} // end update2


/**
 * Initial function when you click to begin.
 */
function start() {

    situation = "The Heighliner's roll is out of control, what is your first move? ";
    a_desc = "Hold back and observe to see how the situation develops.";
    b_desc = "Approach the ship.";
    c_desc = "Run! Get some distance between you and the Heighliner."

    countdown();

    update3(situation, opt_A, a_desc, opt_B, b_desc, opt_C, c_desc);

}


function opt_A() {

    death("You watch as the Heighliner continues its uncontrolled spin, breaking apart into thousands of pieces. \
    Your craft gets hit with a chunk of a Heighliner engine, killing everyone onboard.");

}

// add option to spin the wrong direction
function opt_B() {

    situation = "You approach the Heighliner carefully, hovering near the docking port that rotates clockwise infront of you.";
    a_desc = "Start spinning your craft clockwise to match the rotation of the Heighliner's docking port.";
    b_desc = "Continue observing. Maybe the ship's safety system will slow the spin.";
    c_desc = "Start spinning your craft clockwise to attempt to match the rotation of the Heighliner's docking port.";

    update3(situation, opt_BA, a_desc, opt_BB, b_desc, opt_BC, c_desc);

}

function opt_C() {

    death("Reversing away from the Heighliner, you get to a position where you will be safe from any debris. \
    You are forced to watch as your only hope of survival tears itself apart into thousands of pieces, stranding and eventually killing your crew.");

}

function opt_BA() {

    situation = "You push right on your stick and begin rolling your craft clockwise until you have perfectly matched the spin of the Heighliner.";
    a_desc = "Pass control to the guidance computer to guide the ship in.";
    b_desc = "Take the controls and attempt to manually dock.";

    update2(situation, opt_BAA, a_desc, opt_BAB, b_desc);

}


function opt_BB() {

    death("As you sit and observe waiting for an automated system to get the Heighliner's roll under control, your craft is hit with debris killing you and your crew.");

}


function opt_BC() {

    death("You push left on your stick and begin rolling your craft counter-clockwise. You must have been disoriented because that's the wrong direction! Too much time has passed to correct your error. \
    The Heighliner breaks apart and debris kills you and your crew instantly.");

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
    c_desc = "Gradually turn on thrusters pointing clockwise in an attempt to resolve the roll.";

    update3(situation, opt_BABA, a_desc, opt_BABB, b_desc, opt_BABC, c_desc);

}


function opt_BABA() {

    win("Success! You manage to bring the spinning to a stop and your crew is able to safely board the Heighliner.");

}


function opt_BABB() {

    death("You allow the Heighliner to continue rolling. It breaks apart while you are attached to it killing you and your crew.");

}

function opt_BABC() {

    death("You must have been disoriented. You rolled the ship even faster clockwise causing an explosion killing everyone onboard.");

}