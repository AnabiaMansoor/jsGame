let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("guessid");
let UserNumberUpdate  = document.getElementById("inputBox");
let maxGuess;


const init = () => {
    computerGuess = Math.floor(Math.random() * 100);

    document.getElementById("welcomeGame").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}
const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userGuessUpdate.setAttribute("disabled", true);
}
const gameStart = () => {
    document.getElementById("welcomeGame").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

const newgameBegin = () =>{
    window.location.reload();
}

const compareGuess = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess.join(",");

    if(userGuess.length < maxGuess)
    { 
        if(userNumber > computerGuess)
        {
            userGuessUpdate.innerHTML="your guess is high";
            UserNumberUpdate.value="";
        }
        else if (userNumber < computerGuess){
            userGuessUpdate.innerHTML="your guess is low";
            UserNumberUpdate.value="";
        }
        else 
        {
            userGuessUpdate.innerHTML="its correct";
            UserNumberUpdate.value="";
            startNewGame();
        }
        if(userNumber > computerGuess)
            {
                userGuessUpdate.innerHTML=`your loose , the correct answer is ${computerGuess}`;
                UserNumberUpdate.value="";
                startNewGame();
            }
            else if (userNumber < computerGuess){
                userGuessUpdate.innerHTML=`your loose , the correct answer is ${computerGuess}`;
                UserNumberUpdate.value="";
                startNewGame();
            }
            else 
            {
                userGuessUpdate.innerHTML="its correct";
                UserNumberUpdate.value="";
                startNewGame();
            }

    }
   
        document.getElementById("attempts").innerHTML= userGuess.length
}
const easyMode = () => {
    maxGuess = 10;
    gameStart();
}
const HardMode = () => {
    maxGuess = 5;
    gameStart();
}




