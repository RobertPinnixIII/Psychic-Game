alert("press ok to begin");

//array tp select letter from for computer and player
var Letters = ["a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    //important variables
var Wins = 0;
var Losses = 0;
var Guesses = 13;
var guessedLetters = []; //Array to capture user letter input




// computer picks letter from Letters array
var computerGuess = Letters[Math.floor(Math.random() * Letters.length)];

console.log(computerGuess);

//telling game to recognize key presses.
document.onkeypress = function(event) {
   
var playerGuess = event.key;

guessedLetters.push(playerGuess);



console.log(playerGuess)






if(playerGuess === computerGuess){
    Wins++;
    
    guessedLetters = [];
    document.getElementById("guestcount").innerHTML = guessedLetters;
    Guesses = 13;
    computerGuess = Letters[Math.floor(Math.random() * Letters.length)];
    console.log(computerGuess);
    alert("YOU WIN!!!");
    
    
    document.getElementById("ftw").innerHTML ="Wins:" + Wins;
    


    
    
    
}else{
    Guesses--;
}


if(Guesses === 0){
    Losses++;
    
    guessedLetters = [];
    document.getElementById("guestcount").innerHTML = guessedLetters;
    Guesses =13;
    computerGuess = Letters[Math.floor(Math.random() * Letters.length)];
    console.log(computerGuess);
    alert("YOU LOSE!");
    

    
    

}


document.getElementById("ftw").innerHTML = "Wins:" + Wins;

document.getElementById("loser").innerHTML = "Losses: " + Losses;

document.getElementById("guesses").innerHTML = "Guesses: " + Guesses;

document.getElementById("guestcount").innerHTML = " Your guess so far:" + guessedLetters.join(', ');


}

