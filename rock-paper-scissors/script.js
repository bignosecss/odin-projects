function getComputerChoice() {
    const results = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * results.length);

    return results[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return `You Lose! Paper beats Rock`;
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return `You win! Rock beats Scissors`;
    }

    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return `You lose! Scissors beats Paper`;
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return `You win! Paperr beats Rock`;
    }

    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return `You lose! Rock beats Scissors`;
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return `You win! Scissors beats Paper`;
    }
        

    else {
        return `TIE! Replay.`;
    }

}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 3 && computerWins < 3) {
        const playerSelection = prompt("请选择 Rock, Paper, Scissors: ");
        const computerSelection = getComputerChoice();

        const resultMsg =  playRound(playerSelection, computerSelection);
        console.log(resultMsg);

        // Find the "win" or "lose"
        if (resultMsg.includes("win")) {
            playerWins += 1;
        } else if (resultMsg.includes("lose")) {
            computerWins += 1;
        }
    }

    if (playerWins === 3) {
        console.log("You win the game!");
    } else {
        console.log("Computer win the game!");
    }

}

game();