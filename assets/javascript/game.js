







var win = 0;
var loss = 0;
var triesleft = 9;
var letter;
var guess = "";
var space = ", ";



//var guessesSoFar = document.getElementById("guesses-so-far-text").textContent;
//var guessesLeftText = document.getElementById("guesses-left-text").textContent;
//var lossesText = document.getElementById("losses-text").textContent;
//var winsText = document.getElementById("wins-text").textContent;
//var directions = document.getElementById("directions").textContent;






document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    console.log(letter);
    if (userGuess == letter) {
        win++;
        document.getElementById("wins-text").textContent= "Wins: " + win;
        reset();
    }
    else {
        triesleft--;
        guess += userGuess + space;
        document.getElementById("guesses-left-text").textContent = "Guesses left: " + triesleft;
        console.log(guess);
        document.getElementById("guesses-so-far-text").textContent= "Guesses so far:" + guess;        
        if (triesleft == 0) {
            loss++;
            document.getElementById("losses-text").textContent= "Losses: " + loss;
            reset();
        }
    
    }
    console.log(win);
    console.log(triesleft);
    console.log(loss);

}



function reset() {
    triesleft = 9;
    randomletter();
    console.log(letter);
    console.log(guess);
    userGuess = "";
    guess = "";
    document.getElementById("guesses-left-text").textContent= "Guesses left: " + triesleft;
    document.getElementById("guesses-so-far-text").textContent= "Guesses so far: " + guess;
//var guessesSoFar = document.getElementById("guesses-so-far-text").textContent;
//var guessesLeftText = document.getElementById("guesses-left-text").textContent;
//var lossesText = document.getElementById("losses-text").textContent;
//var winsText = document.getElementById("wins-text").textContent;
//var directions = document.getElementById("directions").textContent;


  //   guessesSoFar.textContent = "You chose: " + guess;
    // winsText.textContent = "Wins: " + win;
    // lossesText.textContent = "Losses: " + loss;
     //guessesLeftText.textContent = "Tries left: " + triesleft;
}



function randomletter() {
    var str = "abcdefghijklmnopqrstuvwxyz";
    var x = Math.floor(Math.random() * (26));
    console.log(x);
    letter = str.charAt(x);
    console.log(letter);
    return letter;




}




