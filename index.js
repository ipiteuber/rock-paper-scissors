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
