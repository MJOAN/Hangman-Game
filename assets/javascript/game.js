var chooseWord = ["acoustics", "adiabatic", "albedo", "acceleration", "ampere",
    "amplitued", "velocity", "electron", "capacitance", "centrifugal", "magnetism",
    "momentum", "mole", "voltage", "nucleus", "joule", "achromatic", "antineutrino",
    "Avogadro", "photon", "proton", "thermodynamics"
];

    // VARIABLES
      // ==========================================================================

        // set up var counters for game at 0 to start and increment or decrement
        var userGuses, hangmanWord, userGuess, lettersAlreadyGuessed;
        var userWin, userLoss = 0;
        var placeHolderForWord = [];
        var guessesRemaining = 30;

    
    // FUNCTIONS
      // ==============================================================================

        function letterGuesses() {
            // math random to pick word from hangmanword array 
            var hangmanWord = chooseWord[Math.floor(Math.random() * chooseWord.length)];
            var placeHolderForWord = [];
            var lettersAlreadyGuessed = placeHolderForWord.length;

             // forloop to iterate into hangmanword length and output to inner HTML as hidden
            // set letters already guessed to placeholder array length then decrement as user guess is correct
            for (var i = 0; i < hangmanWord.length; i++) {
                placeHolderForWord[i] = "__";
            }
            // display "__" which are placeholders for hangmanword letters
            // SYNTAX ERROR LINE 40 not displaying "__" for placeHolderForWord array var
            document.getElementById("hangman").innerHTML = placeHolderForWord[i];
           
            // for loop through placeholder array length 
            for (var k = 0; k < placeHolderForWord.length; k++) {

                // if "__" is equal to hangman letter than decrement letter already guessed 
                if (placeHolderForWord[i] !== "__") {

                    // -= is same as lettersalreadguess = lettersalreadguess - placeholderforword
                    lettersAlreadyGuessed -= 1;
                    document.getElementById("lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed.toUpperCase();
                } // end forloop
            } // end if 
        } // end letter guesses function


        // start hangmanGame function which is userguess to hangman word letter comparison conditionals 
        function hangmanGame(hangmanWord, userGuess) {

            var hangmanWord = chooseWord[Math.floor(Math.random() * chooseWord.length)];
            var hangmanWordLetter = hangmanWord.indexOf();
            var placeHolderForWord = [];
            var message = "Please guess again! Enter any letter from A to Z!";

            // start game code conditional statements   
            // checking if != hangmanword letter || user enters number   
            if (userGuess !== hangmanWordLetter || userGuess === !isNAN) {
                lettersAlreadyGuessed++;
                guessesRemaining--;

                document.getElementById("message").innerHTML = message;
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
                        lettersAlreadyGuessed++;
                        guessesRemaining--;

                        document.getElementById("message").innerHTML = "Great work! You've got a letter!";
                        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
                        document.getElementById("lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed;
                        console.log(userGuess, guessesRemaining, lettersAlreadyGuessed);

                    } // end if statement
                } // end forloop
            } // end if else 
        } // end hangmanGame





    // MAIN PROCESS
      // ==============================================================================

      // Calling functions to start the game.
        letterGuesses(); 
        hangmanGame();

      // When the user presses a key, it will run the following function...
      // game starts when onkey up is triggered in HTML - NOT SURE WHERE TO END CURLY BRACE 
      document.onkeyup = function(event) {

            // Use key events to listen for the letters that your players will type
            var userGuess = document.addEventListener("event");

            // math random to pick word from hangmanword array 
            var hangmanWord = chooseWord[Math.floor(Math.random() * chooseWord.length)];

            // forloop to iterate into hangmanword length and output to inner HTML as hidden
            for (var i = 0; i < hangmanWord.length; i++) {
                placeHolderForWord[i] = "__";
            }
            // display "__" which are placeholders for hangmanword letters
            // SYNTAX ERROR LINE 40 not displaying "__" for placeHolderForWord array var
            document.getElementById("hangman").innerHTML = placeHolderForWord[i];


    // WIN LOSS RESET FUNCTIONS
      // ==============================================================================

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
                winLoss();
            } // end winLoss function



    } // end function(event)