"use strict";

// about me guessing game

let userName = prompt("Hello, what is your name?");
alert("Hello, " + userName + ". Welcome to the site!");


let userResponse = prompt("Would you like to play a guessing game to find out more about Spencer, the site's author?").toLowerCase();

// if respond yes, run guessing game
if ((userResponse === 'yes') || (userResponse === 'y')) {
    alert("Great, let's begin!");
    guessingGame();
} else if ((userResponse === 'no') || (userResponse === 'n')){
    alert("Goodbye!");
} else {
    alert("Invalid input. Goodbye!");
}


function guessingGame() {
    
    let userScore = 0;
    
    let cityResponse = prompt("Is Spencer from Seattle?").toLowerCase();
    if ((cityResponse === 'yes') || (cityResponse === 'y')) {
        console.log("cityResponse: " + "Correct response.");
        alert("That's right!");
        userScore += 1;
    } else if ((cityResponse === 'no') || (cityResponse === 'n')) {
        console.log("cityResponse: " + "Incorrect response.");
        alert("Incorrect! Spencer is from Seattle.");
    } else {
        console.log("cityResponse: " + "Invalid response.");
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    let favSportResponse = prompt("Is Spencer's favorite sport basketball?").toLowerCase();
    if ((favSportResponse === 'yes') || (favSportResponse === 'y')) {
        console.log("favSportResponse: " + "Incorrect response.");
        alert("Nope, it's soccer!");
    } else if ((favSportResponse === 'no') || (favSportResponse === 'n')) {
        console.log("favSportResponse: " + "Correct response.");
        alert("Correct! It's soccer.");
        userScore += 1;
    } else {
        console.log("favSportResponse: " + "Invalid response.");
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    let meditateResponse = prompt("Does Spencer like to meditate?").toLowerCase();
    if ((meditateResponse === 'yes') || (meditateResponse === 'y')) {
        console.log("meditateResponse: " + "Correct response.");
        alert("Correct! Spencer likes to meditate everyday.");
        userScore += 1;
    } else if ((meditateResponse === 'no') || (meditateResponse === 'n')) {
        console.log("meditateResponse: " + "Incorrect response.");
        alert("Wrong!");
    } else {
        console.log("meditateResponse: " + "Invalid response.")
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    let favBookResponse = prompt("Is Dune Spencer's favorite book?").toLowerCase();
    if ((favBookResponse === 'yes') || favBookResponse === 'y') {
        console.log("favBookResponse: " + "Correct response.");
        alert("That's correct!");
        userScore += 1;
    } else if ((favBookResponse === 'no') || (favBookResponse === 'n')) {
        console.log("favBookResponse: " + "Incorrect response.");
        alert("Wrong! Dune is the best book ever!");
    } else {
        console.log("favBookResponse: " + "Invalid response.");
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    let hikingResponse = prompt("Does Spencer like to go hiking?").toLowerCase();
    if ((hikingResponse === 'yes') || (hikingResponse === 'y')) {
        console.log("hikingResponse: " + "Correct response.");
        alert("That's right! Especially Mailbox Peak.");
        userScore += 1;
    } else if ((hikingResponse === 'no') || (hikingResponse === 'n')) {
        console.log("hikingResponse: " + "Incorrect response.");
        alert("Incorrect!");
    } else {
        console.log("hikingResponse: " + "Invalid response.");
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    alert("Well done " + userName + " you got " + userScore + "/5 questions right!");
} 