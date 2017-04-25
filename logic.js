var wins = 0;
var losses = 0;
var guesses = 9;
var lettersToGuess = null;
var guessedLetters = [];


var computerSelection = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var computerChoice = computerSelection[Math.floor(Math.random() * computerSelection.length)];
console.log(computerChoice);

function updateLosses() {
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
    };

function updateWins() {
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
    };

function updateGuesses() {
        document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guesses;
    };


function lossLogic() {
    if (guesses == 0){
                losses++;
                updateLosses();
                guesses=9;
                alert("sorry");
            }}

function keyInput(event) {
    updateGuesses();
    var userGuess = event.key;
    //event.key
    //use event.key for user input

  console.log(keyInput);
  
 if (userGuess == computerChoice){
        wins++;
         updateWins();
         updateGuesses();
         
         alert("Congratulations");
             } else if (userGuess !== computerChoice){
             	guesses--;
                updateGuesses();
                lossLogic()
              


             	
             	 }}
             	

        




