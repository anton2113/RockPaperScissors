function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let computerChoice;
    if (num == 0) {
        computerChoice = "rock";
    } else if (num == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getWinner(player1_, player2_){
    let player1 = player1_.toUpperCase();
    let player2 = player2_.toUpperCase();
    const ROCK = "ROCK";
    const PAPER = "PAPER";
    const SCISSORS = "SCISSORS";
    let winner; /*0 (even), 1(player1), or 2(player2)*/
    if (player1 == player2) {
        winner = 0;
    }
    else if (player1 == ROCK) {
        if (player2 == PAPER) {
            winner = 2;
        } else if (player2 == SCISSORS){
            winner = 1;
        }
    } else if (player1 == PAPER){
        if (player2 == ROCK) {
            winner = 1;
        } else if (player2 == SCISSORS) {
            winner = 2;
        }
    } else if (player1 == SCISSORS) {
        if (player2 == ROCK) {
            winner = 2;
        } else if (player == PAPER) {
            winner = 1;
        }
    }
    return winner;
}

function playRound(playerSelection, computerSelection) {
    let winner = getWinner(playerSelection, computerSelection);
    if (winner == 0) {
        return "Even";
    } else if (winner == 1) {
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        return "Computer wins! " + computerSelection + " beats " + playerSelection + ".";
    }
}

function game() {
    let computerChoice;
    let playerChoice;
    for (i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = prompt();
        console.log(computerChoice);
        console.log(playRound("rock", computerChoice));
    }
}

game();