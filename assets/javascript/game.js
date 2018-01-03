
var guessLimit;
var correctLetter;
var wrongLetter;
var word; 
var wordArray;
var userWin = 0;
var userLoss = 0;
var wordElement = document.getElementById('hangman');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');

function startGame() {
    wordArray = ["acoustics", "adiabatic", "albedo", "acceleration", "ampere",
            "amplitued", "velocity", "electron", "capacitance", "centrifugal", "magnetism",
            "momentum", "mole", "voltage", "nucleus", "joule", "achromatic", "antineutrino",
            "Avogadro", "photon", "proton", "thermodynamics"
            ];

    word = wordArray[Math.floor(Math.random() * wordArray.length)];
    guessLimit = word.length + 5;   // allowed guesses is guesses remaining lettercount div
    wrongLetter = [];
    correctLetter = [];

  // initialize correctGuesses array with underscores
  for (var i = 0; i < word.length; i++) {
    correctLetter.push('_');
  }

  wordElement.innerHTML = correctLetter.join(' ');
  letterCountElement.innerHTML = guessLimit;
  console.log("guessLimit: ", guessLimit)
}

function updateGuesses(letter) {
  guessLimit--;
  letterCountElement.innerHTML = guessLimit;

    if (word.indexOf(letter) === -1) { // letter is NOT in the word
    wrongLetter.push(letter); 
    lettersGuessedElement.innerHTML = "Letters Guessed: " + wrongLetter.join(' ');
    
    } else { 
    
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        correctLetter[i] = letter;
      }
    }
    wordElement.innerHTML = correctLetter.join(' ');
  }
}

function winloss() {
  if (correctLetter.indexOf('_') === -1) {
        userWin++;
        document.getElementById("message").innerHTML = "Congratulations! You've won the Hangman Challenge!";
        document.getElementById("userWin").innerHTML = "Win: " + userWin;
        letterCount.innerHTML = "";  


  } else if (guessLimit === 0) {
        userLoss++;
        document.getElementById("message").innerHTML = "You lost this game, please try again!";
        document.getElementById("userLoss").innerHTML = "Loss: " + userLoss;
        letterCount.innerHTML = "";  
    }
  }

function resetGame() {
    letterCountElement.innerHTML = "";
    location.reload();
}


document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // var regEx = /^[a-zA-Z]*$/;
    updateGuesses(userGuess);
    winloss();
};

startGame();