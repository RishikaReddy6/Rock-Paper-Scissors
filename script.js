/*we create functions for every little work and increase the reusability of the code
this in programming is called modular*/
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
// let body = document.querySelector("body");

const userScoreDisplay = document.querySelector("#userScore");
const compScoreDisplay = document.querySelector("#compScore");

const genCompChoice = () => {
    let options = ["rock","paper","scissors"];  //firstly storing our choices in an array
    const ranIdx = Math.floor(Math.random() * 3); //mul by (n) to get 0-(n-1) values
    return options[ranIdx];
}

const drawGame = () => {
    msg.innerText = "game draw";
    msg.style.backgroundColor = "yellow";
    //even tho it's same as prev, u gotta mention again cuz if u dont then it'll get updated from win/lost cases and remains same 
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScoreDisplay.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreDisplay.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else { //userChoice= scissors
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    } 
}

choices.forEach((choice) => {  //loop goes to each and every choice i.e r,p,s
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");  //we use id to know the user choice
        playGame(userChoice);
    });
});
