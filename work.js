let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
 
const compScorePara=document.querySelector("#comp-score");

const generateComputerChoice = () => {
    const option = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
};
const drawGame = () => {
    console.log("game is draw");
}

const choiceWinnner = (userWin) => {
    if( userWin ){
        userScore++;
        userScorePara.innerText= userScore ;
        console.log("you win");
        msg.innerText = "You win!";
        msg.style.backgroundColor = " green"
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("computer win ");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = " red"
    }
}; 

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = generateComputerChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
        //draw game
        msg.innerText = "Game Draw! , play Again";
        msg.style.backgroundColor = " #081b31";
        drawGame();
    }
    else{
        let userWin = true;
        if( userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if( userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ?false:true;
        }
        choiceWinnner(userWin);

    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    
    });
});
