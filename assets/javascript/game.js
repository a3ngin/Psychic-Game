






    var win = 0;
    var loss = 0;
    var triesleft = 9;
    

    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
    }

    
        for (triesleft = 9; triesleft > 0; triesleft --){
            if (userGuess === letter) {
                win++;
                triesleft = 0;}
            if (userGuess!= letter) {triesleft--;}
        }


    }






    function randomletter() {
        var str = "abcdefghijklmnopqrstuvwxyz";
        var x = Math.floor(Math.random() * (26));
        var letter;
        console.log(x);
        var letter = str.charAt(x);
        console.log(letter);
    }
    
    
    