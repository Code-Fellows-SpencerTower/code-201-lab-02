"use strict";

// about me guessing game
/*
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
    
    // question 1
    let cityResponse = prompt("Is Spencer from Seattle?").toLowerCase();
    if ((cityResponse === 'yes') || (cityResponse === 'y')) {
        //console.log("cityResponse: " + "Correct response.");
        alert("That's right!");
        userScore += 1;
    } else if ((cityResponse === 'no') || (cityResponse === 'n')) {
        //console.log("cityResponse: " + "Incorrect response.");
        alert("Incorrect! Spencer is from Seattle.");
    } else {
        //console.log("cityResponse: " + "Invalid response.");
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    // question 2
    let favSportResponse = prompt("Is Spencer's favorite sport basketball?").toLowerCase();
    if ((favSportResponse === 'yes') || (favSportResponse === 'y')) {
        //console.log("favSportResponse: " + "Incorrect response.");
        alert("Nope, it's soccer!");
    } else if ((favSportResponse === 'no') || (favSportResponse === 'n')) {
        //console.log("favSportResponse: " + "Correct response.");
        alert("Correct! It's soccer.");
        userScore += 1;
    } else {
        //console.log("favSportResponse: " + "Invalid response.");
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    // question 3
    let meditateResponse = prompt("Does Spencer like to meditate?").toLowerCase();
    if ((meditateResponse === 'yes') || (meditateResponse === 'y')) {
        //console.log("meditateResponse: " + "Correct response.");
        alert("Correct! Spencer likes to meditate everyday.");
        userScore += 1;
    } else if ((meditateResponse === 'no') || (meditateResponse === 'n')) {
        //console.log("meditateResponse: " + "Incorrect response.");
        alert("Wrong!");
    } else {
        //console.log("meditateResponse: " + "Invalid response.")
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    // question 4
    let favBookResponse = prompt("Is Dune Spencer's favorite book?").toLowerCase();
    if ((favBookResponse === 'yes') || favBookResponse === 'y') {
        //console.log("favBookResponse: " + "Correct response.");
        alert("That's correct!");
        userScore += 1;
    } else if ((favBookResponse === 'no') || (favBookResponse === 'n')) {
        //console.log("favBookResponse: " + "Incorrect response.");
        alert("Wrong! Dune is the best book ever!");
    } else {
        //console.log("favBookResponse: " + "Invalid response.");
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    // question 5
    let hikingResponse = prompt("Does Spencer like to go hiking?").toLowerCase();
    if ((hikingResponse === 'yes') || (hikingResponse === 'y')) {
        //console.log("hikingResponse: " + "Correct response.");
        alert("That's right! Especially Mailbox Peak.");
        userScore += 1;
    } else if ((hikingResponse === 'no') || (hikingResponse === 'n')) {
        //console.log("hikingResponse: " + "Incorrect response.");
        alert("Incorrect!");
    } else {
        //console.log("hikingResponse: " + "Invalid response.");
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    // question 6
    // guess a number
    for (let i=0; i <=4; i++) {
        let numberGuess = prompt("Guess a number between 1 and 100:");
        if (numberGuess < 74) {
            alert("Too low! Guess again.");
        } else if (numberGuess > 74) {
            alert("Too high! Guess again.");
        // loose equivalent to accept string
        } else if (numberGuess == 74) {
            alert("You guessed it!");
            userScore += 1;
            break;
        } else {
            alert("Please enter a number between 1 and 100:");
        }
    }

    // question 7
    placesVisited = ['england', 'thailand', 'eduador', 'japan', 'canada', 'spain'];
    for (let i = 0; i <= 6; i++) {
        let placesResponse = prompt("What countries have I visited?").toLowerCase(); 
        for (let i = 0; i <= placesVisited.length(); i++) {
            if (placesResponse === placesVisited[i]) {
                alert("Correct!");
                break;
            } 
        }
    }

}
*/

// question 7
let placesVisited = ['england', 'thailand', 'ecuador', 'japan', 'canada', 'spain'];
let answer = false;
for (let i = 6; i >= 6; i--) {
    let placesResponse = prompt("What countries have I visited?").toLowerCase(); 
    for (let i = 0; i <= placesVisited.length; i++) {
        if (placesResponse === placesVisited[i]) {
            alert("Correct!");
            answer = true;
            userScore += 1;
            break;
        }
    
    if (answer === true) {
        break;
    } else {
        alert("Guess again!");
    }
    }
    if (i === 0) {
        alert("Your out of guesses!")
    }
}