// What is your name?
let userName = prompt("What is your name?")
alert("Welcome " + userName + "!")

// Generic alerts to yes/no answer questions.
let invalid = "Invalid response.";
let correct = "You were correct!"
let incorrect = "That is incorrect. It's probably the other answer."

// Deliberating not using a function, loop, nor map for the intent of this assignment.
// Asks user a question. User is alerted whether answer was correct.
// Invalid responses: not yes/y/no/n. Capitalization has no affect.
let response = prompt('Are cats my favorite kind of pet?')
if (typeof(response) == 'string') {
    response = response.toLowerCase();
    if (response == 'yes' || response == 'y') {
        //console.log(correct);
        alert(correct);
    } else if (response == 'no' || response == 'n') {
        //console.log(incorrect);
        alert(incorrect);
    } else {
        //console.log(invalid);
        alert(invalid);
    }
} else {
    //console.log(invalid);
    alert(invalid);
}

response = prompt('Is watermelon not my favorite food?')
if (typeof(response) == 'string') {
    response = response.toLowerCase();
    if (response == 'yes' || response == 'y') {
        //console.log(incorrect);
        alert(incorrect);
    } else if (response == 'no' || response == 'n') {
        //console.log(correct);
        alert(correct);
    } else {
        //console.log(invalid);
        alert(invalid);
    }
} else {
    //console.log(invalid);
    alert(invalid)
}

response = prompt('Is my favorite color blue?')
if (typeof(response) == 'string') {
    response = response.toLowerCase();
    if (response == 'yes' || response == 'y') {
        //console.log(incorrect);
        alert(incorrect);
    } else if (response == 'no' || response == 'n') {
        //console.log(correct);
        alert(correct);
    } else {
        //console.log(invalid);
        alert(invalid);
    }
} else {
    //console.log(invalid);
    alert(invalid)
}

response = prompt('Do I enjoy listening to music?')
if (typeof(response) == 'string') {
    response = response.toLowerCase();
    if (response == 'yes' || response == 'y') {
        //console.log(correct);
        alert(correct);
    } else if (response == 'no' || response == 'n') {
        //console.log(incorrect);
        alert(incorrect);
    } else {
        //console.log(invalid);
        alert(invalid);
    }
} else {
    //console.log(invalid);
    alert(invalid);
}


response = prompt('Is Gundam Unicorn my favorite anime?')
if (typeof(response) == 'string') {
    response = response.toLowerCase();
    if (response == 'yes' || response == 'y') {
        //console.log(correct + " Thank you for playing this guessing game, " + userName + "!");
        alert(correct + " Thank you for playing this guessing game, " + userName + "!");
    } else if (response == 'no' || response == 'n') {
        //console.log(incorrect + " Thank you for playing this guessing game, " + userName + "!");
        alert(incorrect + " Thank you for playing this guessing game, " + userName + "!");
    } else {
        //console.log(invalid + " Thank you for playing this guessing game, " + userName + "!");
        alert(invalid + " Thank you for playing this guessing game, " + userName + "!");
    }
} else {
    //console.log(invalid + " Thank you for playing this guessing game, " + userName + "!");
    alert(invalid + " Thank you for playing this guessing game, " + userName + "!");
}