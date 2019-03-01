






    var win = 0;
    var loss = 0;
    var triesleft = 9;
    var letter = any;

    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        console.log(userGuess);
        console.log(letter);
            if (userGuess == letter) {
                win++;
                reset();
                }
            if (userGuess != letter) {
                triesleft--;
                if(triesleft == 0) {loss++; 
                reset();
            }
            
        }
        console.log(win);
        console.log(triesleft);
        console.log(loss); 

    }



    function reset(){
        triesleft = 9;
        randomletter();
        console.log(letter);
    }



    function randomletter() {
        var str = "abcdefghijklmnopqrstuvwxyz";
        var x = Math.floor(Math.random() * (26));
        var letter;
        console.log(x);
        var letter = str.charAt(x);
        console.log(letter);
        return letter;
    }
    
    
    