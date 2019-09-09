var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var urGuesses = 0;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var urGuessesText = document.getElementById("urguesses-text");

document.onkeyup = function(event) {

var userGuess = event.key.toLowerCase();

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Computer: " + computerGuess);
    
if (userGuess === computerGuess) {
    wins++;
    guessesLeft = 9;
    urGuesses = 0;
}
else if (userGuess !== computerGuess) {
    guessesLeft--
    urGuesses++
    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 9;
        urGuesses = 0;
    }
}
    console.log("User: " + userGuess);
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    urGuessesText.textContent = "Your guesses so far: " + urGuesses;
};