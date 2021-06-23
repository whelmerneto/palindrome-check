const main = (params) => {
    //Generating random words
    function randoWord(length) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random()*charactersLength));
        }
        return result;
    }
    
    /* Checking if palindrome by turning the generated word into an array of each letter using .split(),
    reversing them using reverse("") and turning it back into a string again using join() and regex to validate*/
    
    function palindrome(str) {
        var str = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
        var splitted = str.split('');
        var reversed = splitted.reverse("");
        var joined = reversed.join("").toLowerCase().replace(/[^0-9a-z]/gi, '');
        return joined == str;
    }
    
    /* Pushing random words into array. Math.floor() gets the integer number,
    Math.random() gets a random number, *3 to set the limit number, so it would
    be 0, 1, 2. And +3 includes 3 more numbers, making the total jump to 6 numbers.
    Total (0, 1, 2, 3, 4 and 5) */
    
    var palin = 0;
    var words = [];
    
    for ( var i = 0; i < 10000; i++ ) {
        words.push(randomWord(Math.floor(Math.random()*3)+3));
        palindrome(words[i]);
        if ( palindrome(words[i]) == true ) {
            palin += 1;
        }
    }
} 
