let humanScore = 0;
let computerScore = 0;


let getComputerChoice = () => {
    let result;
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1){
        result = "Paper";
    } else if (randomNum === 2){
        result = "Rock";
    } else {
        result = "Scissors";
    }
    return result;
}

let getHumanChoice = () => {
    let output;
    choice = parseInt(prompt("Select your option: \n1- Rock \n2- Paper \n3- Scissors"));
        switch (choice) {
        case 1:
            output = "Rock";
            break;
        case 2:
            output = "Paper";
            break;
        case 3:
            output = "Scissors";
            break;
        default:
            console.log("Assuming you chose Rock =D")
            output = "Rock";
            break;
     }   
     return output;
}

let playRound = (humanChoice, computerChoice) => {
    console.log(`You chose ${humanChoice}\nThe computer chose ${computerChoice}`);
    if (humanChoice === computerChoice){
        return console.log("It's a Draw!");
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors!");
            return computerScore++;
        } else {
            console.log("You win! Scissors beats Paper!");
            return humanScore++;
        }
    } else if (humanChoice === "Paper") {
         if (computerChoice === "Scissors") {
            console.log("You lose! Scissors beats Paper!");
            return computerScore++;
        } else {
            console.log("You win! Paper beats Rock!");
            return humanScore++;
        }
    } else if (humanChoice === "Rock"){
         if (computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock!");
            return computerScore++;
        } else {
            console.log("You win! Rock beats Scissors!");
            return humanScore++;
        }
    }
} 

let playGame = () => {
    console.log("Welcome to my Rock Paper and Scissors Game!");
    let roundNums = parseInt(prompt("How many rounds do you wanna play?"));
    for (let i = 1; i <= roundNums; i++){
        let humanSel = getHumanChoice();
        let computerSel = getComputerChoice();
        playRound(humanSel, computerSel);
        console.log(`Current Score:\nUser:${humanScore}\nComputer:${computerScore}`);
    }
    if(computerScore === humanScore){
        console.log("It's a DRAW");
    } else if (computerScore > humanScore){
        console.log("You've LOST to the machine haha!")
    } else {
        console.log("You've WON, Nice one!")
    }
    console.log(`----- Final Score -----\nUser: ${humanScore}\nComputer:${computerScore}`);
    return "Thanks for playing!";
}

