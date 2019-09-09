var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var userGuessesText = document.getElementById("userguesses-text");

function userGuessSoFar() {
    userGuessesText.textContent = "Your guesses so far: " + userGuesses.join(" ");
}

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Computer: " + computerGuess);

var reset = function () {
    userGuesses = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("Computer: " + computerGuess);
}

document.onkeyup = function(event) {

var userGuess = event.key.toLowerCase();

userGuesses.push(userGuess);
userGuessSoFar()

    
if (userGuess === computerGuess) {
    wins++;
    guessesLeft = 9;
    reset ()
}
else if (guessesLeft == 0) {
    losses++;
    guessesLeft = 9;
    reset ()

}
guessesLeft--

    console.log("User: " + userGuess);
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    userGuessesText.textContent = "Your guesses so far: " + userGuesses.join(" ");
};