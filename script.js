//Randomly selects from an array of options

function computerPlay(){
    const choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()* 3)];
}

// Plays one round, playerSelection is case insensitive. Returns the winner or if the game ties.

let computerWins = 0;
let playerWins = 0;

const results = document.querySelector('.results')

function playRound(playerSelection, computerSelection) {
    
   computerSelection = computerPlay();
    const final = playerSelection[0].toUpperCase() + playerSelection.substring(1)
    results.textContent = `${final}, ${computerSelection}`
    if(final === computerSelection) {
        return "Tie, try again"
    } else if(final === "Rock" && computerSelection !== "Paper") {
        playerWins++;
        return `Player wins, player: ${playerWins} computer: ${computerWins}`
    } else if(final === "Paper" && computerSelection !== "Scissors"){
        playerWins++;
        return `Player wins, player: ${playerWins} computer: ${computerWins}`
    } else if(final === "Scissors" && computerSelection !== "Rock"){
        playerWins++;
        return `Player wins, player: ${playerWins} computer: ${computerWins}`
    } else {
        computerWins++;
        return `Computer wins, player: ${playerWins} computer: ${computerWins}`
    }
  }

// Add event listener to buttons
const container = document.querySelector('.container')
container.addEventListener('click', function(e) {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
      } else {

    console.log(e.target.textContent)
      }
})