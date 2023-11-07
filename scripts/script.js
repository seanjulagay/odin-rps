console.log("Hello world!");

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);

  switch (randomInt) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "error";
  }
}

function capitalizeFirstLetter(myStr) {
  return String(myStr).charAt(0).toUpperCase() + String(myStr).slice(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = String(playerSelection.toLowerCase());

  let loseMsg = `You lose! ${capitalizeFirstLetter(
    computerSelection
  )} beats ${playerSelection}!`;
  let winMsg = `You win! ${capitalizeFirstLetter(
    playerSelection
  )} beats ${computerSelection}!`;
  let tieMsg = `There was a tie! You both picked ${playerSelection}.`;

  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    return `Error! You inputted an invalid choice. You chose ${playerSelection}`;
  }

  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return loseMsg;
    } else if (computerSelection == "scissors") {
      return winMsg;
    } else if (computerSelection == "rock") {
      return tieMsg;
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "paper") {
      return tieMsg;
    } else if (computerSelection == "scissors") {
      return loseMsg;
    } else if (computerSelection == "rock") {
      return winMsg;
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return winMsg;
    } else if (computerSelection == "scissors") {
      return tieMsg;
    } else if (computerSelection == "rock") {
      return loseMsg;
    }
  }
}

function game() {
  let playerChoice = prompt("Please enter your choice");

  console.log(playRound(playerChoice, getComputerChoice()));
}

function main() {
  for (i = 0; i < 5; i++) {
    game();
  }
}

main();
