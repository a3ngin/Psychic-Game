
var guessesSoFar = document.getElementById("guesses-so-far-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var lossesText = document.getElementById("losses-text");
var winsText = document.getElementById("wins-text");
var directions = document.getElementById("directions");






var win = 0;
var loss = 0;
var triesleft = 9;
var letter;
var guess = "";
var space = " ";

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    console.log(letter);
    if (userGuess == letter) {
        win++;
        reset();
    }
    else {
        triesleft--;
        guess += userGuess + space;
        console.log(guess);
        if (triesleft == 0) {
            loss++;
            reset();
        }
        guessesSoFar.textContent = "You chose: " + guess;
        winsText.textContent = "Wins: " + win;
        lossesText.textContent = "Losses: " + loss;
        guessesLeftText.textContent = "Tries left: " + triesleft;

    }
    console.log(win);
    console.log(triesleft);
    console.log(loss);

}



function reset() {
    triesleft = 9;
    randomletter();
    console.log(letter);
}



function randomletter() {
    var str = "abcdefghijklmnopqrstuvwxyz";
    var x = Math.floor(Math.random() * (26));
    console.log(x);
    letter = str.charAt(x);
    console.log(letter);
    return letter;
}




