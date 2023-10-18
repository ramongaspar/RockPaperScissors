const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const imgComputer = document.getElementById("computer-choice");
const scorePlrEl = document.getElementById("player-score");
const scoreCptEl = document.getElementById("computer-score");
const imgPlayer = document.getElementById("img-player")

const option = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;
let playerChoice;


rock.addEventListener("click", ()=>{
    playerChoice = 0;
    imgPlayer.innerHTML = renderChoice(playerChoice);
    }
);
paper.addEventListener("click", ()=>{
    playerChoice = 1;
    imgPlayer.innerHTML = renderChoice(playerChoice);
});
scissor.addEventListener("click", ()=>{
    playerChoice = 2;
    imgPlayer.innerHTML = renderChoice(playerChoice);
});



function game(){

    let computerChoice = generateComputerChoice();
    console.log(computerChoice)
    imgComputer.innerHTML= renderChoice(computerChoice);
    let result = duel(playerChoice, computerChoice);
    if (result === "plr"){
        playerScore += 1;
    }else if(result === "cpt"){
        computerScore +=1;
    }else{
        console.log(result)
    }
    scorePlrEl.innerHTML = playerScore;
    scoreCptEl.innerHTML = computerScore;
}

function duel(plr, cpt){
    // 0 > 2 ; 1 > 0; 2 > 1
    //recebe as escolhas
    //transforma em pedra papel ou tesoura
    //se pedra vs papel = papel, se papel vs tesoura = tesoura, se tesoura vs pedra = pedra
    let result=""
    console.log("variables "+ plr, cpt ,result)
    switch(true){
        case (plr===0 && cpt===1):
            console.log(1)
            result = "cpt";
            break;
        case (plr===0 && cpt==2):
            result = "plr";
            console.log(2)
            break;
        case (plr==1 && cpt==0):
            result = "plr";
            console.log(3)
            break;
        case (plr===1 && cpt===2):
            result = "cpt";
            console.log(4)
            break;
        case (plr===2 && cpt===0):
            result = "cpt";
            console.log(5)
            break;
        case (plr===2 && cpt===1):
            result = "plr";
            console.log(6)
            break;    
        default:
            console.log(7)
            result = "draw";
            break;
    }
    console.log("after switch " +  result)
    return result;
}

function generateComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function renderChoice(choice){
    console.log(choice)
    let imgText = "";
    switch(true){
        case (choice === 0):
            imgText = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQLogI6N-WNA11BQYemy5ayImKPpRrguPp6I27VMl4qEtytfYHF3DqD094WBKzNbpJ5w&usqp=CAU">`;
            break;
        case (choice === 1):
            imgText = `<img src="http://www1.lasalle.edu/~blum/c230wks/RockPaperScissors/P.jpg">`;
            break;
        case (choice === 2):
            imgText = `<img src="http://www1.lasalle.edu/~blum/c230wks/RockPaperScissors/S.jpg">`;
            break;
        default:
            break;
    } 
    return imgText;
}