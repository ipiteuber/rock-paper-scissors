console.log("Hello world!")
humanScore = 0
computerScore = 0

function getComputerChoice() {
    CP_choice = ((Math.random() * 100) + 1) 
        if (CP_choice >= 1 && CP_choice <= 34) {
            CP_choice = 'Rock';
        } else if (CP_choice >= 35 && CP_choice <= 67){
            CP_choice = 'Paper';
        } else {
            CP_choice = 'Scissors';
}
return CP_choice
}

function getHumanChoice() {
    H_choice = prompt("Select your choice: ")
    H_choice = H_choice.toLowerCase()
    H_choice = H_choice.charAt(0).toUpperCase() + H_choice.slice(1)
return H_choice
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log("It's a draw!")
    } else if (computerChoice == 'Rock' && humanChoice == 'Scissors'){
        console.log('You lose! Rock beats Scissors')
    } else if (computerChoice == 'Scissors' && humanChoice == 'Rock'){
        console.log('You win! Rock beats Scissors')
    } else if (computerChoice == 'Paper' && humanChoice == 'Rock'){
        console.log('You lose! Paper beats Rock')
    } else if (computerChoice == 'Rock' && humanChoice == 'Paper')
        console.log('You win! Paper beats Rock')
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    for (var i = 1; i < 8; i++) playRound(i);
}