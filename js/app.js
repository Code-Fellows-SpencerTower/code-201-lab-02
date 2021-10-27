"use strict";

// about me guessing game

let userName = prompt("Hi, I'm Spencer. What is your name?");
alert("Hello, " + userName + ". Welcome to the site!");


let userResponse = prompt("Would you like to play a guessing game to find out more about me?").toLowerCase();

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
    let cityResponse = prompt("Am I from Seattle?").toLowerCase();
    if ((cityResponse === 'yes') || (cityResponse === 'y')) {
        //console.log("cityResponse: " + "Correct response.");
        alert("That's right!");
        userScore += 1;
    } else if ((cityResponse === 'no') || (cityResponse === 'n')) {
        //console.log("cityResponse: " + "Incorrect response.");
        alert("Incorrect! I am from Seattle.");
    } else {
        //console.log("cityResponse: " + "Invalid response.");
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    // question 2
    let favSportResponse = prompt("Is my favorite sport basketball?").toLowerCase();
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
    let meditateResponse = prompt("Do I like to meditate?").toLowerCase();
    if ((meditateResponse === 'yes') || (meditateResponse === 'y')) {
        //console.log("meditateResponse: " + "Correct response.");
        alert("Correct! I like to meditate everyday.");
        userScore += 1;
    } else if ((meditateResponse === 'no') || (meditateResponse === 'n')) {
        //console.log("meditateResponse: " + "Incorrect response.");
        alert("Wrong!");
    } else {
        //console.log("meditateResponse: " + "Invalid response.")
        alert("Invalid response. Please answer 'yes'/'y' or 'no'/'n'.")
    }

    // question 4
    let favBookResponse = prompt("Is Dune my favorite book?").toLowerCase();
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
    let hikingResponse = prompt("Do I like to go hiking?").toLowerCase();
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
    let placesVisited = ['england', 'thailand', 'ecuador', 'japan', 'canada', 'spain'];
    let answer = false;
    for (let i = 0; i < 6; i++) {
        let placesResponse = prompt("What countries have I visited?").toLowerCase();
        // console.log("Number of guesses left: " + i)
        for (let i = 0; i <= placesVisited.length; i++) {
            // console.log("placesVisited: " + placesVisited[i]);
            if (placesResponse === placesVisited[i]) {
                alert("Correct!");
                answer = true;
                userScore += 1;
                // console.log("userScore: " + userScore);
                break;
            }
        }

        // check if got right answer
        if (answer === true) {
            break;
        } else {
            alert("Nope, guess again!");
        }

        // if (i === 0) {
        //     alert("Your out of guesses!")
        // }
        
    }

    // tell user score
    alert("Well done, you got " + userScore + "/7 questions correct!");
}