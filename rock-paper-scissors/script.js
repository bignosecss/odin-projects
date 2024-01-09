function getComputerChoice() {
    const results = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * results.length);

    return results[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    while(true) {
        if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
            return `You Lose! Paper beats Rock`;
        }
        else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
            return `You win! Rock beats Scissors`;
        }

        else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
            return `You lose! Scissors beats Paper`;
        }
        else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
            return `You win! Paperr beats Rock`;
        }

        else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
            return `You lose! Rock beats Scissors`;
        }
        else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
            return `You win! Scissors beats Paper`;
        }
            

        else
            console.log(`TIE! Replay.`);
    }
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));