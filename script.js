function getComputerChoice() {
  const numberOfPossibleChoices = 3;
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * numberOfPossibleChoices)];
}
