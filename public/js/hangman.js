"use strict";

var Hangman = {
    words:            ["banshee", "guitar", "drum", "friend", "banana", "swing", "lizard", "social", "motorcycle"], // Set of words for hangman to choose from
    currentWord:      '', // Current word for the game
    correctGuesses:   [], // Correct letters the user has guesses
    incorrectGuesses: [], // Wrong letters the user has guessed
    maxGuesses:        6, // Maximum number of wrong guesses the user is allowed


    /**
     * Do all the initial game setup, register any necessary event listeners.
     * This method should only be run once.
     */
    init: function() {
        $(document).ready(function(){
            console.log("init");
            $("#start-btn").click(function() {
                Hangman.gameStart();
            })
        });
        $("body").keypress(function(event) {
            Hangman.keyPressHandler(event);
        });

    },

    /**
     * Start a new game. Should be used whenever a new hangman game is begun.
     */
    gameStart: function() {
        console.log("gameStart");
        this.pickWord();
            
    },

    /**
     * Pick a new random word and assign it to the currentWord property
     */
    pickWord: function() {
        var arrayLength = this.words.length;
        var index = this.getRandomInt(0, arrayLength - 1);
        this.currentWord = this.words[index];
        this.currentWord = this.currentWord.toLowerCase();
        console.log("the selected word is-- " + this.currentWord);

    },

    /**
     * The game has finished. Use this method at the end of the game if necessary
     * to remove things like event listeners or display a "New Game" button.
     */
    gameEnd: function() {
        console.log("gameEnd");

// *****GAME END SHOULD SHOW EITHER A "WINNER" OR, "NOT THIS TIME" MESSAGE  
    },

    /**
     * Event handler for when a keyboard key is pressed.
     *
     * @param Event event - JavaScript event object
     */
    keyPressHandler: function(event) {
        console.log("keyPressHandler");
        // console.log(event.keyCode);

         //******************** REMEMBER BELOW***********************************
        if(this.incorrectGuesses.length >= this.maxGuesses) {
            alert("Sorry, you're a loser!");
        }

        var letter = String.fromCharCode(event.keyCode);
        letter = letter.toLowerCase();

        if(this.hasLetterBeenGuessed(letter)){
            alert("You've already guessed that one");
        }
        if(this.isLetterInWord(letter)) {
            this.addCorrectGuess(letter);
            this.findLetterInWord(letter);
        } else {
            this.addIncorrectGuess(letter);
        };
          // this.
        // figure out if key pressed is in the word--SIDE NOTES
    },

    /**
     * Random number generator, should return an integer between min and max.
     *
     * @param integer min
     * @param integer max
     *
     * @return integer
     */
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;

        // MAY BE LOCATION OF WORD
    },

    /**
     * Check if the user has guessed a given letter before (either right or wrong).
     *
     * @param string letter - Letter the user typed
     *
     * @return boolean
     */
    hasLetterBeenGuessed: function(letter) {
        
        if(this.correctGuesses.indexOf(letter) >= 0 || 
            this.incorrectGuesses.indexOf(letter) >= 0)
            {
            return true;
        } else {
            return false;
        };

        // IS LETTER IN WORD--NOT?
    },

    /**
     * Return whether or not a letter is in the current word.
     *
     * @param string letter - Letter the user typed
     *
     * @return boolean
     */
    isLetterInWord: function(letter) {
        console.log("isInLetterInWord");
        var isInLetterInt = this.currentWord.indexOf(letter);
        if(isInLetterInt >= 0) {
            return true;
        } else {
            return false;
        };

        //******************* to do:  MAKE ALL LOWER CASE***************


        // IF IN WORD CORRECT GUESS ARRAY!
    },

    /**
     * Return the indexes where a given letter occurs in the current word
     * For example, if the word is "banana", and the letter passed was "a"
     * then this function should return [1, 3, 5]. If the letter passed was
     * "b" then the function should return [0]. If the letter was "q" then
     * it should return [].
     *
     * @param string letter - Letter the user typed
     *
     * @return array - Array of indexes in the word
     */
    findLetterInWord: function(letter) {
        console.log("findLetterInWord");
        var result = [];
        var wordArray = this.currentWord.split("");
        wordArray.forEach(function(lchar, index){
            if(lchar==letter){
                result.push(index);
            }
        }); 
        return result;
    },

    /**
     * Add a letter to the array of correct guesses and handle any additional steps
     *
     * @param string letter - Letter the user typed
     */
    addCorrectGuess: function(letter) {
        console.log("addCorrectGuess");
        this.correctGuesses.push(letter);    
        console.log(this.correctGuesses);
    },

    /**
     * Add a letter to the array of incorrect guesses and handle any additional steps
     *
     * @param string letter - Letter the user typed
     */
    addIncorrectGuess: function(letter) {
        console.log("addIncorrectGuess");
        this.incorrectGuesses.push(letter);
        console.log(this.incorrectGuesses);
    },

    /**
     * Check whether all the letters in the word have been guessed
     *
     * @return boolean
     */
    isGameWon: function() {

    }
};


Hangman.init();
