const possibleChoices = ["rock", "paper", "scissors"];

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
