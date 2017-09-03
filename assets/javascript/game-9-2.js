< script type = "text/javascript" >

    var chooseWord = ["acoustics", "adiabatic", "albedo", "acceleration", "ampere",
        "amplitued", "velocity", "electron", "capacitance", "centrifugal", "magnetism",
        "momentum", "mole", "voltage", "nucleus", "joule", "achromatic", "antineutrino",
        "Avogadro", "photon", "proton", "thermodynamics"
    ];

    // userguess onkey regex test only 
    var regEx / ^ ([a - zA - Z] + $ / ;
    var userGuess = document.addEventListener("event", regEx);

    // set up var counters for game
    var userWin, userLoss, lettersAlreadyGuessed, guessesRemaining = 0;

    // display ___ for each letter in hangman word
    var placeHolder = "__";

    // var for letter in hangmanWord string length
    var hangmanWordLetter = hangmanWord[i].length.indexOf();

    // game starts when onkey up is triggered

    document.onkeyup = function(event) {

        // math random to pick word from hangmanword array 

        var hangmanWord = function(chooseWord) {
            var chooseWord = Math.floor(Math.random() * chooseWord.length + 1);
            return chooseWord;
        }

        hangmanWord();

        // placeholder "__" spaces for length of hangmanWord or do I use chooseWord as parameter?  

        function hideWord(hangmanWord()) {

            // get hangman word into a split string 
            var array = hangmanWord.split(" "); 
            // set var text to empty string for inner HTML output
            var text = " ";

            // forloop to iterate into hangmanword length and output to inner HTML as hidden
            for (var i = 0; i < hangmanWord.length; i++)
               text += array[i];
        }
                document.getElementById("letters").innerHTML = text;
                document.getElementById("letters").style.visibility = "hidden" ;
                hideWord();



            // Looping through hangmanWord string length
            function letterGuessed(hangmanWord) {
                for (var i = hangmanWord[i]; i === hangmanWord.length[i]; i++)

                    // checking which IF statement is right below 

                    if (userGuess === hangmanWordLetter[i].charAt(0)) {

                        // Console out the "letter" in the hangmanWord string.  
                        console.log(hangmanWordLetter[i]);

                    } else {

                        // checking for in not a number || user enters wrong letter

                        if (userGuess !== hangmanWordLetter.length[i] || userGuess === !isNAN)
                            console.log("Please enter any letter from A to Z!");
                    }
            }


            function charCount() {
                var userGuess = document.getElementById('onkeyup').value;

                var msg = document.getElementById('msg');
                var counter = (10 - (textEntered.length));
                msg.textContent = counter + ' characters left';
            }

            var el = document.getElementById('text');
            el.addEventListener('keyup', charCount, false);





            var showHideLetter

            function showHide() {
                var letter = document.getElementById('div');

                if (letter.style.display === 'none') {
                    letter.style.display = 'block';
                } else {
                    letter.style.display = 'none';
                }
            }
            // Code Above Reference from StackOverflow: https://stackoverflow.com/questions/17592015/on-keypress-display-one-div-and-other-should-hide

            var currentVisible = 0;
            document.onkeyup = function() {
                // First hide all by class 'objects'
                var objs = document.getElementsByClassName('objects');
                for (var i = 0; i < objs.length; i++) {
                    objs[i].style.display = 'none';
                    console.log()
                }

                // Show the one we are supposed to show
                if (++currentVisible == 7)
                    currentVisible = 1;
                var el = document.getElementById('d' + currentVisible);
                el.style.display = 'block';
            }

            var guessesRemaining = function() {
                if (var i = hangmanWord.length[i]; i <= hangmanWordLetter; i--) {
                    console.log(guessesRemaining);
                }
            }

            var lettersAlreadyGuessed = function() {
                if (var j = hangmanWord.length[j]; j <= hangmanWordLetter; i--) {
                    console.log(lettersAlreadyGuessed);
                }
            }

            console.log("Letters Already Guessed: " + lettersAlreadyGuessed);
            console.log("Number of Guesses Remaining: " + guessesRemaining);
            console.log("Number of Guesses Correctly: " + userWins);

        }





        var startNewGame = function hangmanStartNew() {
            // code to start or reset game 
            console.log(startNewGame);
        }

        var gameOver = function hangmanWin() {
            if (guessesRemaining === 0) {
                console.log("Congratulations! You've won the Hangman Challenge!");
            }

            startNewGame();
            chooseWord();
        }
    }
}
} <
/script>