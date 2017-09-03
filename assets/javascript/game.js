var chooseWord = ["acoustics", "adiabatic", "albedo", "acceleration", "ampere",
    "amplitued", "velocity", "electron", "capacitance", "centrifugal", "magnetism",
    "momentum", "mole", "voltage", "nucleus", "joule", "achromatic", "antineutrino",
    "Avogadro", "photon", "proton", "thermodynamics"
];

    // VARIABLES
      // ==========================================================================

        // set up var counters for game at 0 to start and increment with each win or loss
        var userGuses, hangmanWord, userGuess, placeHolderForWord, lettersAlreadyGuessed;
        var userWin, userLoss = 0;
        // setting total guesses at 30 to start decrement with each userGuess
        var guessesRemaining = 30;

    // FUNCTIONS
      // ==============================================================================

        // start game function after onkey up event listener
        function startGame() {

            // this will clear last guess so new field to enter new guess
            // document.getElementById("event").value = "";

            // captures the key press, converts it to lowercase, and saves it to a variable.
            // var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            // create hangman word array so each char has a "__" placeholder  
            var placeHolderForWord = [];

            // math random to pick word from hangmanword array 
            var hangmanWord = chooseWord[Math.floor(Math.random() * chooseWord.length)];

            // forloop to iterate into hangmanword length and output to inner HTML as hidden
            for (var i = 0; i < hangmanWord.length; i++) {
                placeHolderForWord[i] = "__";
            }
            
            // display "__" which are placeholders for hangmanword letters
            // SYNTAX ERROR LINE 40 not displaying "__" for placeHolderForWord array var
            document.getElementById("hangman").innerHTML = placeHolderForWord[i];

        } // end startGame function

        function letterGuesses() {

            // set letters already guessed to placeholder array length then decrement as user guess is correct
            var lettersGuessed = placeHolderForWord[i].length;
            var lettersAlreadyGuessed = lettersGuessed.toUpper();

                // for loop through placeholder array length 
            for (var k = 0; k < placeHolderForWord.length; k++) {

                    // if "__" is equal to hangman letter than decrement letter already guessed 
                if (placeHolderForWord[i] !== "__") {

                        // -= is same as lettersalreadguess = lettersalreadguess - placeholderforword
                    lettersAlreadyGuessed -= 1;
                    document.getElementById("lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed;
                } // end forloop
            } // end if 
        } // end letter guesses function

        function resetGame() {
                document.getElementById("message").innerHTML = "You have reset the game! The word was " + hangmanWord;
                document.getElementById("hangman").innerHTML = placeHolderForWord.join(" ");
                }

        function winLoss() {
                        // else if no more guesses (30 done) then increment and display userLoss 
            if (guessesRemaining === 0) {
                userLoss++;
                document.getElementById("message").innerHTML = "I'm sorry, you are all out of guesses! Please try again!";
                document.getElementById("userLoss").innerHTML = userLoss;
                console.log(userLoss);

                            // else userGuess equals all elements existing in array then incremenet userWin
                } else if (lettersAlreadyGuessed === 0) { 
                    userWin++;
                    document.getElementById("message").innerHTML = "Congratulations! You've won the Hangman Challenge!";
                    document.getElementById("userWin").innerHTML = userWin;
                    console.log(userWin);
                }
                resetGame();
            } // end winLoss function

    // MAIN PROCESS
      // ==============================================================================

      // Calling functions to start the game.
        startGame();
        letterGuesses(); 
        winLoss(); 
        hangmanGame();

      // When the user presses a key, it will run the following function...
      // game starts when onkey up is triggered in HTML - NOT SURE WHERE TO END CURLY BRACE 
      document.onkeyup = function(event) {

        // Use key events to listen for the letters that your players will type
            var userGuess = event.key;

        // start hangmanGame function which is userguess to hangman word letter comparison conditionals 
        function hangmanGame(hangmanWord, userGuess) {

            // start game code conditional statements   
            // checking if != hangmanword letter || user enters number   
            if (userGuess !== hangmanWord.length[i] || userGuess === !isNAN) {

                guessesRemaining--;

                document.getElementById("message").innerHTML = "Please guess again! Enter any letter from A to Z!";
                document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
                document.getElementById("lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed;
                console.log(guessesRemaining, lettersAlreadyGuessed);

            } else {
                // iterate thru hangmanword length if userguess letter is equal to hangmanword letter 
                for (var j = 0; j < hangmanWord.length; j++) {
                    if (userGuess === hangmanWord[i]) {
                        placeHolderforWord[i] = userGuess;

                        // setting userguess to event id in HTML
                        // then set userguess to hangman id in HTML to display userguess within hangman word
                        userGuess = document.getElementByID("event").value;
                        document.getElementByID("hangman").innerHTML = userGuess;

                        // increment letters already guessed and decrement guesses remaining
                        guessesRemaining--;

                        document.getElementById("message").innerHTML = "Great work! You've got a letter!";
                        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
                        document.getElementById("lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed;
                        console.log(userGuess, guessesRemaining, lettersAlreadyGuessed);

                    } // end if statement
                } // end forloop
            } // end if else 
        } // end hangmanGame
    } // end function(event)