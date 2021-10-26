"use strict";

// about me guessing game

let userName = prompt("Hello, what is your name?");
alert("Hello," + userName + ". Welcome to the site!");


let userResponse = prompt("Would you like to play a guessing game to find out more about Spencer, the site's author?").toLowerCase();

// if respond yes, run guessing game
if (userResponse === 'yes') {
    alert("Great, let's begin!");
    guessingGame();
} else {
    alert("Goodbye!");
}

let userScore = 0;
function guessingGame() {
    
    let cityResponse = prompt("Is Spencer from Seattle?").toLowerCase();
    if ((cityResponse === 'yes') || (cityResponse === 'y')) {
        alert("That's right!");
        userScore += 1;
    } else if ((cityResponse === 'no') || (cityResponse === 'n')) {
        alert("Incorrect! Spencer is from Seattle.");
    } else {
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    let favSportResponse = prompt("Is Spencer's favorite sport basketball?").toLowerCase();
    if ((favSportResponse === 'yes') || (favSportResponse === 'y')) {
        alert("Nope, it's soccer!");
    } else if ((favSportResponse === 'no') || (favSportResponse === 'n')) {
        alert("Correct! It's soccer.");
        userScore += 1;
    } else {
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    let meditateResponse = prompt("Does Spencer like to meditate?");
    if ((meditateResponse === 'yes') || (meditateResponse === 'y')) {
        alert("Correct! I try to meditate everyday.");
        userScore += 1;
    } else if ((meditateResponse === 'no') || (meditateResponse === 'n')) {
        alert("Wrong!");
    } else {
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    let favBookResponse = prompt("Is Dune Spencer's favorite book?");
    if ((favBookResponse === 'yes') || favBookResponse === 'y') {
        alert("That's correct!");
        userScore += 1;
    } else if ((favBookResponse === 'no') || (favBookResponse === 'n')) {
        alert("Wrong! Dune is the best book ever!");
    } else {
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    let hikingResponse = prompt("Does Spencer like to go hiking?");
    if ((hikingResponse === 'yes') || (hikingResponse === 'y')) {
        alert("That's right! Especially Mailbox Peak.");
        userScore += 1;
    } else if ((hikingResponse === 'no') || (hikingResponse === 'n')) {
        alert("Incorrect!");
    } else {
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    alert("Well done " + userName + " you got " + userScore + "/5 questions right!");
} 