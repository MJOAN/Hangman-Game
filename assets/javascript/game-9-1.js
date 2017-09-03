< script type = "text/javascript" >
    /*Use key events to listen for the letters user types
    Wins: (# of times user guessed the word correctly).
    If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
    As the user guesses the correct letters, reveal them: m a d o _  _ a.
    Number of Guesses Remaining: (# of guesses remaining for the user).
    Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
    After the user wins/loses the game should automatically choose another word and make the user play it.*/

    var wordPool = ["acoustics", "adiabatic", "albedo", "acceleration", "ampere",
        "amplitued", "velocity", "electron", "capacitance", "centrifugal", "magnetism",
        "momentum", "mole", "voltage", "nucleus", "joule", "achromatic", "antineutrino",
        "Avogadro", "photon", "proton", "thermodynamics"
    ];

        var regEx /^([a-zA-Z]+$/ ;
        var userGuess = document.addEventListener("keyup", regEx).value;
        var hangmanWord = wordArray[i].length.indexOf(0);
        var userWin, userLoss, counter = 0;
        var lettersAlreadyGuessed = (userGuess === hangmanWordLetter.length || userGuess != hangmanWordLetter);
        var guessesRemaining = (userGuess <= 15);

        document.onkeyup = function(event) {

            // first get random word from hangmanword array using math.random
            // store in function chooseWord()

            //var hangmanWord = chooseWord[Math.floor(Math.random() * chooseWord.length)];

            function hangmanWord(wordPool) {
                return wordPool[Math.floor(Math.random() * wordPool.length)];
            }

            hangmanWord();

            // next hideWord() using getElementbyId and .display to hide in HTML
            // use "__" to equal number of letters in hangmanWord

            function hideWord(chooseWord) {

                // set randomized word to hangmanword var
                // then take in userGuess from getElemById 'letter' and place into var userGuess
                var word = hangmanWord();
                var userGuess = document.getElementsById("letters").value;
                var placeHolder = "__";

                // iterate thru for loop incrementing placeholder " __ "  which is the length of the hangmanword
                for (var i = 0; i < word.length; i++) {
                  return placeHolder++;
                }

                // then start game loop and userGuess display to HTML

                    if (userGuess === hangmanWordLetter[i].indexOf()) {
                        document.getElementById("letters").style.visibility = "show";
                        userGuess.style.display = "show";
                    }


function checkLetter()
{
   letter = document.getElementById("letter").value;
   for(i = 0; i < letters; i++)
   {
     if(letter == letters[i])
     {
        stripes[i] = letter;
     }
     var complete_string += stripes[i]
   }     
}

                    // then show letter as userGuesses  
                    function showLetter() {
                        var letter = document.getElementById("letter");
                        if (letter.style.display === "none") {
                            letter.style.display = "block";
                        } else {
                            letter.style.display = "none";
                        }
                    }
                    
                    // checking for in not a number || user enters wrong letter
                            if (userGuess !== hangmanWordLetter.indexOf().length[i] || userGuess === !isNAN)
                                console.log("Please enter any letter from A to Z!");
                        }
                    }

                    var lettersAlreadyGuessed = function() {
                        if (var userGuess === hangmanWord.length[j]; j <= hangmanWordLetter; i++) {
                            counter++;

                        console.log("Letters Already Guessed: " + lettersAlreadyGuessed);
                        console.log("Number of Guesses Remaining: " + guessesRemaining);
                        console.log("Number of Guesses Correctly: " + userWins);

                        }
                    }

                    var gameOver = function hangmanWin() {
                            if (userGuess === !hangmanWordLetter.indexOf().length[i]) {
                                console.log("Congratulations! You've won the Hangman Challenge!");
                            } else if {
                                (guessesRemaining === 0) 
                                console.log("Sorry! You are out of guesses!");
                            }
                        }

                    var startNewGame = function hangmanStartNew() {
                        // code to start or reset game 
                        console.log(startNewGame);
                    }
                            startNewGame();
              } 
        </script>