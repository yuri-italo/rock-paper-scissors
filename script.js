const possibleChoices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(possibleChoices) {
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function getHumanChoice(possibleChoices) {
  let humanChoice;
  do {
    humanChoice = window.prompt(
      "What is your choice? [rock, paper or scissors]"
    );
  } while (possibleChoices.indexOf(humanChoice) === -1);

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie! Neither the computer nor the human won.");
  } else {
    const beats = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    const humanWins = beats[humanChoice] === computerChoice;

    if (humanWins) {
      humanScore++;
      console.log(`You won! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`);
    }
  }
}
