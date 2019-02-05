
var computerpicks = ["a", "e", "i", "o", "u",];
 

var wins = 0;
var losses = 0;
var guesses = 10;

    var userlog = document.getElementById("log");
    var guessestext = document.getElementById("guesses-text");
    var winstext = document.getElementById("wins-text");
    var lossestext = document.getElementById("losses-text");



document.onkeyup = function(event) {
var userguesses = event.key;



var computerguess = computerpicks[Math.floor(Math.random() * computerpicks.length)];



    if ( userguesses === computerguess) {
        wins++; 

    } else {
        losses++;
    }

    if ( userguesses === computerguess) {
        guesses--; 

    }

    if ( userguesses != computerguess) {
        guesses--; 

    }

    if ((userguesses != "a") && (userguesses != "e") && (userguesses != "i") && (userguesses != "o") && (userguesses != "u")) {

    alert("That's not a vowel!");
    }

    

        winstext.textContent = "Wins: " + wins;
        lossestext.textContent = "Losses: " + losses;
        guessestext.textContent = "Guesses left: " + guesses;
        userlog.innerHTML= "Letters Guessed: " + userguesses[i];   

        
}
 // Need to run function in a loop nine times, declare winner and start over. 
 //Separate game using all letters and letting a user have nine tries

