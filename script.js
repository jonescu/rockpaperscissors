//Randomly selects from an array of options

function computerPlay(){
    const choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()* 3)];
}

// Plays one round, playerSelection is case insensitive. Returns the winner or if the game ties.

let computerWins = 0;
let playerWins = 0;

function playRound(playerSelection, computerSelection) {
   playerSelection = prompt('Make a selection: Rock, Paper, or Scissors')
   computerSelection = computerPlay();
    const final = playerSelection[0].toUpperCase() + playerSelection.substring(1)
    console.log(final, computerSelection);
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


//Play best of five

  function game() {
    for (let i = 0; i<5; i++) {
        console.log(playRound());
        if(computerWins == 3) {
            return "Computer won best of five"
        } else if(playerWins == 3) {
            return "Player won best of five"
        }
     }
  }
  
  console.log(game());