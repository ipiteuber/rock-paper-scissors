console.log("Hello world!")

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
