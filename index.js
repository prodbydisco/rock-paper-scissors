
let computerScore = 0;
let playerScore = 0;
let round = 1;
let choices = ['rock', 'paper', 'scissors'];


// disable default 'enter' key behaviour
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        return false;
    }
});


function toggleBlur() {
    console.log('toggled blur');
    const container = document.querySelector('.container');
    container.classList.contains("blur") ? container.classList.remove('blur') :  container.classList.add('blur');
}

function hideStart() {
    const playContainer = document.getElementById('play-container');
    playContainer.classList.contains("invisible") ? playContainer.classList.remove('invisible') :  playContainer.classList.add('invisible');
}


function showAlert() {
    const alertBox = document.getElementById('alert-container');
    console.log('showing alert');

    toggleBlur();
    alertBox.classList.remove('alert-invisible');
    alertBox.classList.add('alert-visible');
}

function hideAlert() {
    const alertBox = document.getElementById('alert-container');
    console.log('hiding alert');
    
    toggleBlur();
    alertBox.classList.remove('alert-visible');
    alertBox.classList.add('alert-invisible');
}

function showRock() {
    const rockElem = document.getElementById('rock');
    rockElem.classList.remove('no-opacity');
    rockElem.classList.add('visible');
    setTimeout(() => {
        rockElem.classList.remove('visible');
        rockElem.classList.add('no-opacity');
    }, 300);
}

function getComputerChoice() {
        let choice = Math.floor(Math.round(Math.random() * 2))
        return choices[choice];
    }


function getPlayerChoice(playerChoice) {
    return choices[playerChoice];
}

function restart() {
    const submitButton = document.getElementById('submit-button')
    const inputBox = document.getElementById('user-input');

    computerScore = 0;
    playerScore = 0;
    round = 1;

    toggleBlur();
    hideStart();

    document.getElementById("rock-btn").disabled = false;
    document.getElementById("paper-btn").disabled = false;
    document.getElementById("scissors-btn").disabled = false;

    document.getElementById('computer-score').innerHTML = `Computer score: ${computerScore}`;
    document.getElementById('player-score').innerHTML = `Your score: ${playerScore}`;
    document.getElementById('round').innerHTML = `Round: ${round}/5`;
    document.getElementById('user-input').value = '';
}


function playGame(arg) {
    alertBox = document.getElementById('alert-message');
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice(arg);


    if (playerChoice === '') {
        alertBox.innerHTML = ("Please enter a valid choice.");
    } else if (computerChoice === playerChoice && playerChoice === 'rock') {
        alertBox.innerHTML = ("It's a tie!");
        showRock();
    } else if (computerChoice === playerChoice) {
        alertBox.innerHTML = ("It's a tie!");
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        alertBox.innerHTML = ("You lose! Rock beats scissors.");
        computerScore++;
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        alertBox.innerHTML = ("You win! Paper beats rock.");
        playerScore++;
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        alertBox.innerHTML = ("You lose! Paper beats rock.");
        showRock();
        computerScore++;
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        alertBox.innerHTML = ("You win! Scissors beats paper.");
        playerScore++;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        alertBox.innerHTML = ("You lose! Scissors beats paper.");
        computerScore++;
    }
    else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        alertBox.innerHTML = ("You win! Rock beats scissors.");
        showRock();
        playerScore++;
    } else {
        alertBox.innerHTML = ("Invalid choice. Please enter rock, paper, or scissors.");
    }

    if (playerScore === 5 || computerScore === 5) {
        const alertBox = document.getElementById('alert-message');
        document.getElementById("rock-btn").disabled = true;
        document.getElementById("paper-btn").disabled = true;
        document.getElementById("scissors-btn").disabled = true;

        playerScore === 5 ? alertBox.innerHTML = `You Win! ${playerScore} to ${computerScore}`: alertBox.innerHTML = `You Lost! ${computerScore} to ${playerScore}`;
            
        // Update displays
        document.getElementById('computer-score').innerHTML = `Computer score: ${computerScore}`;
        document.getElementById('player-score').innerHTML = `Your score: ${playerScore}`;
        
        showAlert();
    
        return;
    }

    showAlert();

    // Update displays
    document.getElementById('computer-score').innerHTML = `Computer score: ${computerScore}`;
    document.getElementById('player-score').innerHTML = `Your score: ${playerScore}`;
}


