let choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let round = 1;





function toggleBlur() {
    const container = document.querySelector('.container');
    container.classList.contains("blur") ? container.classList.remove('blur') :  container.classList.add('blur');
}

function hideStart() {
    const playContainer = document.getElementById('play-container');
    playContainer.classList.contains("invisible") ? playContainer.classList.remove('invisible') :  playContainer.classList.add('invisible');
}


function showAlert() {
    toggleBlur();

    const alertBox = document.getElementById('alert-box');
    alertBox.classList.remove('alert-invisible');
    alertBox.classList.add('alert-visible');
}

function hideAlert() {
    toggleBlur();
    
    const alertBox = document.getElementById('alert-box');
    alertBox.classList.remove('alert-visible');
    alertBox.classList.add('alert-invisible');
}

function rock() {
    const rockElem = document.getElementById('rock');
    rockElem.classList.add('visible');
    setTimeout(() => {
        rockElem.classList.remove('visible');
    }, 700);
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
        showAlert();
    } else if (computerChoice === playerChoice && playerChoice === 'rock') {
        alertBox.innerHTML = ("It's a tie!");
        showAlert();
        rock();

        round++;
    } else if (computerChoice === playerChoice) {
        alertBox.innerHTML = ("It's a tie!");
        showAlert();

        round++;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        alertBox.innerHTML = ("You lose! Rock beats scissors.");
        showAlert();

        computerScore++;
        round++;
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        alertBox.innerHTML = ("You win! Paper beats rock.");
        showAlert();
        
        playerScore++;
        round++;
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        alertBox.innerHTML = ("You lose! Paper beats rock.");
        showAlert();
        rock();

        computerScore++;
        round++;
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        alertBox.innerHTML = ("You win! Scissors beats paper.");
        showAlert();

        playerScore++;
        round++;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        alertBox.innerHTML = ("You lose! Scissors beats paper.");
        showAlert();

        computerScore++;
        round++;
    }
    else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        alertBox.innerHTML = ("You win! Rock beats scissors.");
        showAlert();
        rock();

        playerScore++;
        round++;
    } else {
        alertBox.innerHTML = ("Invalid choice. Please enter rock, paper, or scissors.");
        showAlert();
    }


    round > 5 ? document.getElementById('round').innerHTML = 'Round: 5/5' : document.getElementById('round').innerHTML = `Round: ${round}/5`;
    document.getElementById('computer-score').innerHTML = `Computer score: ${computerScore}`;
    document.getElementById('player-score').innerHTML = `Your score: ${playerScore}`;


    if (round > 5) {
        if (computerScore > playerScore) {
            alertBox.innerHTML = ("Game over!\nYou lose! Computer wins.");
            showAlert();
        } else if (computerScore < playerScore) {
            alertBox.innerHTML = ("Game over!\nYou win! Computer loses.");
            showAlert();
        } else {
            alertBox.innerHTML = ("Game over!\nIt's a tie!");
            showAlert();
        }
    }
}

function restart() {
    computerScore = 0;
    playerScore = 0;
    round = 1;

    toggleBlur();
    hideStart();

    document.getElementById('computer-score').innerHTML = `Computer score: ${computerScore}`;
    document.getElementById('player-score').innerHTML = `Your score: ${playerScore}`;
    document.getElementById('round').innerHTML = `Round: ${round}/5`;
    document.getElementById('user-input').value = '';
}


