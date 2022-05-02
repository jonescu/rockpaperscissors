//Randomly selects from an array of options

function computerPlay(){
    const choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()* 3)];
}

// Plays one round, playerSelection is case insensitive. Returns the winner or if the game ties.

const results = document.querySelector('.results')
results.textContent = "Make a selection, first to five wins!";

let computerWins = 0;
let playerWins = 0;

function playRound(playerSelection, computerSelection) {


    const playerScore = document.querySelector('.playerScore');
    const computerScore = document.querySelector('.computerScore');

    computerSelection = computerPlay();

    if(playerSelection === computerSelection) {
        results.textContent = `Player chose the same as the computer, pick again.`
    } else if(playerSelection === "Rock" && computerSelection !== "Paper") {
        results.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}, player wins.`
        playerWins+= 1;
    } else if(playerSelection === "Paper" && computerSelection !== "Scissors"){
        results.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}, player wins.`
        playerWins++;
    } else if(playerSelection === "Scissors" && computerSelection !== "Rock"){
        results.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}, player wins.`
        playerWins++;
    } else {
        results.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}, computer wins.`
        computerWins++;
    }

    

    if(computerWins === 5) {
    results.textContent = `GAME OVER, COMPUTER WINS`
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissors').disabled = true;
    document.querySelector('.play-again').style.visibility = 'visible';
    computerWins = 0;
    playerWins = 0;
    } if(playerWins === 5) {
    results.textContent = `CONGRATULATIONS, YOU BEAT THE COMPUTER`
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissors').disabled = true;
    document.querySelector('.play-again').style.visibility = 'visible';
    computerWins = 0;
    playerWins = 0;
    }
    playerScore.textContent = `Player: ${playerWins}`
    computerScore.textContent = `Computer: ${computerWins}`
}

const playAgain = document.querySelector('.play-again');

playAgain.addEventListener('click', function (){
    document.querySelector('.rock').disabled = false;
    document.querySelector('.paper').disabled = false;
    document.querySelector('.scissors').disabled = false;
    playAgain.style.visibility = 'hidden'
    computerSelection = '';
    playerSelection = ''
})

// Add event listener to buttons, get user input

const container = document.querySelector('.container')
container.addEventListener('click', function(e) {
const isButton = e.target.nodeName === 'BUTTON';
if (!isButton || e.target.className === "play-again") {
    return;
  } else {
      playerSelection = e.target.textContent;
      playRound(playerSelection);
  }
})