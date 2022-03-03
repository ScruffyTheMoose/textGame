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