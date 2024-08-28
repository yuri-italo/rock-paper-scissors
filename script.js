let humanScore = 0;
let computerScore = 0;

const beats = { rock: "scissors", paper: "rock", scissors: "paper" };

const humanScoreSpan = document.querySelector(".human-score");
const computerScoreSpan = document.querySelector(".computer-score");
const choiceContainer = document.querySelector(".choice-container");
const resultP = document.querySelector(".result-container p");
const buttons = document.querySelectorAll(".choice-button");

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

function playRound(event) {
  const computerChoice = getComputerChoice().trim().toLowerCase();
  const humanChoice = event.target
    .closest("button")
    .innerText.trim()
    .toLowerCase();

  if (humanChoice === computerChoice) {
    resultP.innerText = "It's a tie! Neither the computer nor you won.";
  } else {
    const humanWins = beats[humanChoice] === computerChoice;

    if (humanWins) {
      humanScoreSpan.innerText = ++humanScore;
      resultP.innerText = `You won! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
    } else {
      computerScoreSpan.innerText = ++computerScore;
      resultP.innerText = `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`;
    }
  }

  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      resultP.innerText = "🎉 CONGRATULATIONS! You’re victorious!";
    } else {
      resultP.innerText =
        "😔 GAME OVER! The computer won this time. Try again for a comeback!";
    }

    buttons.forEach((button) => {
      button.style.display = "none";
    });

    const playAgain = document.createElement("button");
    playAgain.innerHTML = 'Play Again <i class="fa-solid fa-rotate-right"></i>';
    choiceContainer.appendChild(playAgain);

    playAgain.addEventListener("click", () => {
      window.location.reload();
    });
  }
}

function getComputerChoice() {
  const possibleChoices = ["rock", "paper", "scissors"];
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}
