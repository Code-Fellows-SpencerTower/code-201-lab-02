"use strict";
// /*
// about me guessing game

let userName = prompt("Hi, I'm Spencer. What is your name?");
alert("Hello, " + userName + ". Welcome to the site!");

alert("Click the 'Start' button to initiate a guessing game.")

// questions 1-5
function aboutMeGuess() {
    let userScore = 0;
    // Outer most layer for our question array
    let questionsArray = [
        //question 
        ["Am I from Seattle?", "Is my favorite sport basketball?", "Do I like to meditate?", "Is Dune my favorite book?", "Do I like to go hiking?"],
        //rightAnwer
        ["yes", "no", "yes", "yes", "yes"],
        //wrongAnswer
        ["no", "yes", "no", "no", "no"]
    ];

    alert("Let's start with a guessing game about me: ");

    for (let x = 0; x < questionsArray[0].length; x += 1) {
        // Inside this loop, we will prompt the user a question based off index 0 of questionsArray.
        let userAnswer = prompt(questionsArray[0][x]); // index 1
        userAnswer = userAnswer.toLowerCase();

        if (userAnswer === questionsArray[1][x]) {
            alert('Correct!');
            userScore += 1;
        } else if (userAnswer === questionsArray[2][x]) {
            alert('Incorrect!');
        } else {
            alert("That is not a valid answer, please enter 'yes' or 'no'");
        }
    }
}

// question 6
function numberGuess() {
    // credit: w3schools
    let correctNum = Math.floor(Math.random() * 100);
    console.log("correctNum:" + correctNum);
    let guessLimit = 4;
    for (let i = 0; i <= guessLimit; i++) {
        let numberGuess = parseInt(prompt("Guess a number between 1 and 100:"));
        console.log("numberGuess: " + numberGuess);

        if ((numberGuess < 1) || (numberGuess > 100)) {
            alert("Please enter a number between 1 and 100:");
        } else if (numberGuess < correctNum) {
            alert("Too low! Guess again.");
        } else if (numberGuess > correctNum) {
            alert("Too high! Guess again.");
        } else if (numberGuess === correctNum) {
            alert("You guessed it!");
            userScore += 1;
            break;
        } else {
            alert("Please enter a number between 1 and 100:");
        }
    }
}

// question 7
function placesVisitedGuess() {
    let placesVisited = ['england', 'thailand', 'ecuador', 'japan', 'canada', 'spain'];
    let answer = false;
    for (let i = 0; i < 6; i++) {
        let placesResponse = prompt("What countries have I visited?").toLowerCase();
        // console.log("Number of guesses left: " + i)
        for (let j = 0; j <= placesVisited.length; j++) {
            // console.log("placesVisited: " + placesVisited[j]);
            if (placesResponse === placesVisited[j]) {
                alert("Correct!");
                answer = true;
                userScore += 1;
                // console.log("userScore: " + userScore);
                break;
            }
        }
        // check if right answer
        if (answer === true) {
            break;
        } else {
            alert("Nope, guess again!");
        }
    }
}

function startGuessingGame() {
    aboutMeGuess();
    numberGuess();
    placesVisitedGuess();
}

// tell user their score
alert("Well done, you got " + userScore + "/7 questions correct!");
