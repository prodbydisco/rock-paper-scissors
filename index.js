let choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let round = 1;



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
    const alertBox = document.getElementById('alert-box');
    console.log('showing alert');

    toggleBlur();
    alertBox.classList.remove('alert-invisible');
    alertBox.classList.add('alert-visible');
}

function hideAlert() {
    const alertBox = document.getElementById('alert-box');
    console.log('hiding alert');
    
    toggleBlur();
    alertBox.classList.remove('alert-visible');
    alertBox.classList.add('alert-invisible');
}

function rock() {
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
    return choices[choice]
}


function getPlayerChoice() {
    choice = document.getElementById('user-input').value;
    return choice;
}

function playGame() {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice().toLowerCase();
    alertBox = document.getElementById('alert-message');


    if (playerChoice === '') {
        alertBox.innerHTML = ("Please enter a valid choice.");
    } else if (computerChoice === playerChoice && playerChoice === 'rock') {
        alertBox.innerHTML = ("It's a tie!");
        rock();

        round++;
    } else if (computerChoice === playerChoice) {
        alertBox.innerHTML = ("It's a tie!");

        round++;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        alertBox.innerHTML = ("You lose! Rock beats scissors.");

        computerScore++;
        round++;
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        alertBox.innerHTML = ("You win! Paper beats rock.");
        
        playerScore++;
        round++;
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        alertBox.innerHTML = ("You lose! Paper beats rock.");
        rock();

        computerScore++;
        round++;
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        alertBox.innerHTML = ("You win! Scissors beats paper.");

        playerScore++;
        round++;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        alertBox.innerHTML = ("You lose! Scissors beats paper.");

        computerScore++;
        round++;
    }
    else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        alertBox.innerHTML = ("You win! Rock beats scissors.");
        rock();

        playerScore++;
        round++;
    } else {
        alertBox.innerHTML = ("Invalid choice. Please enter rock, paper, or scissors.");
    }

    if (round > 5) {
        document.getElementById('round').innerHTML = 'Round: 5/5';
        const alertBox = document.getElementById('alert-message');
        const submitButton = document.getElementById('submit-button');
        const inputBox = document.getElementById('user-input');
        
        if (computerScore > playerScore) {
            alertBox.textContent = "Game over! You lose! Computer wins.";
        } else if (computerScore < playerScore) {
            alertBox.textContent = "Game over! You win! Computer loses.";
        } else {
            alertBox.textContent = "Game over! It's a tie!";
        }
        
        console.log('Showing final alert');
        showAlert();
        
        inputBox.setAttribute('disabled', '');
        submitButton.setAttribute('disabled', '');
        
        // Reset input
        document.getElementById('user-input').value = '';
        return;
    }

    showAlert();

    // Update displays for non-final rounds
    document.getElementById('round').innerHTML = `Round: ${round}/5`;
    document.getElementById('computer-score').innerHTML = `Computer score: ${computerScore}`;
    document.getElementById('player-score').innerHTML = `Your score: ${playerScore}`;
}

function restart() {
    const submitButton = document.getElementById('submit-button')
    const inputBox = document.getElementById('user-input');

    computerScore = 0;
    playerScore = 0;
    round = 1;

    toggleBlur();
    hideStart();

    submitButton.removeAttribute('disabled');
    inputBox.removeAttribute('disabled');

    document.getElementById('computer-score').innerHTML = `Computer score: ${computerScore}`;
    document.getElementById('player-score').innerHTML = `Your score: ${playerScore}`;
    document.getElementById('round').innerHTML = `Round: ${round}/5`;
    document.getElementById('user-input').value = '';
}


