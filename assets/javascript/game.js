

    // VARIABLES
      // ==========================================================================
        var userGuess, hangmanWord, lettersAlreadyGuessed;
        var userWin, userLoss = 0;
        var placeHolderForWord = [];
        var guessesRemaining = 30;

		var chooseWord = ["acoustics", "adiabatic", "albedo", "acceleration", "ampere",
    		"amplitued", "velocity", "electron", "capacitance", "centrifugal", "magnetism",
   			"momentum", "mole", "voltage", "nucleus", "joule", "achromatic", "antineutrino",
    		"Avogadro", "photon", "proton", "thermodynamics"
			];

   // MAIN PROCESS
      // ==============================================================================

   // FUNCTIONS
      // ==============================================================================
      
      document.onkeyup = function(event) {

            var e = document.addEventListener("onkeyup", event);
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase(e);
            var hangmanWord = chooseWord[Math.floor(Math.random() * chooseWord.length)];
            var placeHolderForWord = [];

            for (var i = 0; i < hangmanWord.length; i++) {
                placeHolderForWord[i] = "__";
            }
            document.getElementById("hangman").innerHTML = placeHolderForWord.join(userGuess);  
        }   
      
            if (userGuess !== placeHolderForWord || userGuess === !isNAN) {
                var lettersAlreadyGuessed = placeHolderForWord.length;
                for (var k = 0; k < placeHolderForWord.length; k++) {
                    if (placeHolderForWord[i] !== "__") {
                        lettersAlreadyGuessed --;
                    }
                document.getElementById("lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed.toUpperCase();
            }  
                lettersAlreadyGuessed++;
                guessesRemaining--;
        
                document.getElementById("message").innerHTML = "Please guess again! Enter any letter from A to Z!";
                document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
                document.getElementById("lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed;

            } else { 
            	for (var j = 0; j < hangmanWord.length; j++) {
                    if (userGuess === hangmanWord[i]) {
                        placeHolderforWord[i] = userGuess;
                        lettersAlreadyGuessed++;
                        guessesRemaining--;

						document.getElementByID("hangman").innerHTML = userGuess;
                        document.getElementById("message").innerHTML = "Great work! You've got a letter!";
                        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
                        document.getElementById("lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed;
                    } 
                } 
            }

    // WIN LOSS RESET FUNCTIONS
      // ==============================================================================

        function resetGame() {
                document.getElementById("hangman").innerHTML = placeHolderForWord.join(" ");
                }
     
        function winLoss() {
            if (guessesRemaining === 0) {
                userLoss++;
                document.getElementById("message").innerHTML = "I'm sorry, you are all out of guesses! Please try again!";
                document.getElementById("userLoss").innerHTML = userLoss;

                } else if (lettersAlreadyGuessed === 0) { 
                    userWin++;
                    document.getElementById("message").innerHTML = "Congratulations! You've won the Hangman Challenge!";
                    document.getElementById("userWin").innerHTML = userWin;
                    }
            } // end winLoss function

           	winLoss();
           	resetGame();
 
