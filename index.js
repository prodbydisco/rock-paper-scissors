let choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let round = 1;


function toggleBlur() {
    const container = document.querySelector('.container');
    const playContainer = document.querySelector('.play-container');

    container.classList.contains("blur") ? container.classList.remove('blur') :  container.classList.add('blur');
    playContainer.classList.contains("invisible") ? playContainer.classList.remove('invisible') :  playContainer.classList.add('invisible');
}


function getComputerChoice() {
    let choice = Math.floor(Math.round(Math.random() * 2))
    return choices[choice]
}


function getPlayerChoice() {
    choice = document.getElementById('user-input').value;
    return choice;
}

function playGame() {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice().toLowerCase();


    if (playerChoice === '') {
        alert("Please enter a valid choice.");
    } else if (computerChoice === playerChoice) {
        alert("It's a tie!");
        round++;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        alert("You lose! Rock beats scissors.");
        computerScore++;
        round++;
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        alert("You win! Paper beats rock.");
        playerScore++;
        round++;
    } else if (computerChoice === 'paper' && playerChoice === 'rock') { 
        alert("You lose! Paper beats rock.");
        computerScore++;
        round++;
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        alert("You win! Scissors beats paper.");
        playerScore++;
        round++;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        alert("You lose! Scissors beats paper.");
        computerScore++;
        round++;
    }
    else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        alert("You win! Rock beats scissors.");
        playerScore++;
        round++;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
    }


    round > 5 ? document.getElementById('round').innerHTML = 'Round: 5/5' : document.getElementById('round').innerHTML = `Round: ${round}/5`;
    document.getElementById('computer-score').innerHTML = `Computer score: ${computerScore}`;
    document.getElementById('player-score').innerHTML = `Your score: ${playerScore}`;


    if (round > 5) {
        if (computerScore > playerScore) {
            alert("Game over!\nYou lose! Computer wins.");
        } else if (computerScore < playerScore) {
            alert("Game over!\nYou win! Computer loses.");
        } else {
            alert("Game over!\nIt's a tie!");
        }
    }
}

function restart() {
    computerScore = 0;
    playerScore = 0;
    round = 1;

    toggleBlur();

    document.getElementById('computer-score').innerHTML = `Computer score: ${computerScore}`;
    document.getElementById('player-score').innerHTML = `Your score: ${playerScore}`;
    document.getElementById('round').innerHTML = `Round: ${round}/5`;
    document.getElementById('user-input').value = '';
}

