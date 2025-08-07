let choice = document.getElementById("ply");
let computerchoice = document.getElementById("comp");
let playerscore = document.getElementById("plysco");
let computerscore = document.getElementById("compsco");
let remarks = document.getElementById("rem");
let computer_score = 0;
let player_score = 0;

let available_choices = ["Rock", "Paper", "Scissors"];

let myBut = document.getElementById("but");
let gameDetails = document.getElementById("details");
let remark = null;

document.addEventListener("DOMContentLoaded", () => {
  myBut.addEventListener("click", () => {
    // const currentDisplay = window.getComputedStyle(gameDetails).display;
    if (gameDetails.style.display == "none") {
      gameDetails.style.display = "block";
      myBut.textContent = "Hide Game Details";
    } else {
      gameDetails.style.display = "none";
      myBut.textContent = "Show Game Details";
    }
  });
});

function playGame(playerchoice) {
  let random_index = Math.floor(Math.random(available_choices) * 2);
  let Computer_choice = available_choices[random_index];

  computerchoice.textContent = Computer_choice;
  choice.textContent = playerchoice;

  if (Computer_choice == playerchoice) {
      remark = "It's a tie!";
      remarks.textContent = remark;
      remarks.style.color="white"
  } else {
    switch (playerchoice) {
      case "Rock":
        remark = Computer_choice == "Scissors" ? "You win" : "You lost";
        remarks.textContent = remark;
        break;
      case "Paper":
        remark = Computer_choice == "Rock" ? "You win" : "You lost";
        remarks.textContent = remark;
        break;
      case "Scissors":
        remark = Computer_choice == "Paper" ? "You win" : "You lost";
        remarks.textContent = remark;
        break;
      default:
        remarks.textContent = "You haven't made anything choice yet!";
    }
  }
  switch (remark) {
    case "You win":
      player_score++;
          playerscore.textContent = player_score;
          remarks.style.color = "green";
      break;
    case "You lost":
      computer_score++;
          computerscore.textContent = computer_score;
          remarks.style.color = "red";
      break;
    case "it's a tie!":
      computerscore.textContent = computer_score;
      playerscore.textContent = player_score;
  }
}
