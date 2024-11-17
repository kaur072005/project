let userscore=0;
let compscore=0;
const circles = document.querySelectorAll(".circle");
const userScorePara = document.querySelector("#userscore");

const compScorePara = document.querySelector("#compscore");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = " game was draw. play again ";
    msg.style.backgroundColor = "brown"; 
};

const showWinner =(userWin,userChoice,compChoice) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }else{
        compscore++;
        compScorePara.innerText=compscore;
        console.log("you lose");
        msg.innerText = `you lost! your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"; 
    }
}

const playGame=(userChoice) =>{
console.log("user choice = " , userChoice);
const compChoice = genCompChoice();
console.log("comp choice", compChoice);


if (userChoice == compChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice==="paper"?false:true;
    }else if (userChoice ==="paper"){
        userWin = compChoice==="scissor"?false:true;
    }else{
        userWin = compChoice==="rock"?false:true;
    }
    showWinner(userWin, userChoice , compChoice);
}
};


circles.forEach((circle) => {
    
    circle.addEventListener("click", ()=>{
        const userChoice=  circle.getAttribute("id");
        playGame (userChoice) ; 
    }
    );
    
});