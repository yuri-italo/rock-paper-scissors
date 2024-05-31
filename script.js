function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let humanChoice;

  do {
    humanChoice = window.prompt(
      "What is your choice? [rock, paper or scissors]"
    );
  } while (choices.indexOf(humanChoice) === -1);

  return humanChoice;
}
