//Randomly selects from an array of options
function computerPlay(){
    const choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()* 3)];
}

// Plays one round, playerSelection is case insensitive. Returns the winner or if the game ties.
function playRound(playerSelection, computerSelection) {
   playerSelection = prompt('Make a selection: Rock, Paper, or Scissors')
   computerSelection = computerPlay();
    const firstChar = playerSelection[0].toUpperCase();
    const player = playerSelection.slice(1).toLowerCase();
    const final =  firstChar.concat(player)
    console.log(final, computerSelection);
    if(final === computerSelection) {
        return "Tie, try again"
    } else if(final === "Rock" && computerSelection !== "Paper") {
        return "Player wins"
    } else if(final === "Paper" && computerSelection !== "Scissors"){
        return "Player wins"
    } else if(final === "Scissors" && computerSelection !== "Rock"){
        return "Player wins"
    } else {
        return "Computer wins"
    }
  }

//Play five rounds
  function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
     }
  }
  
  game();
