function getComputerChoice(){
    let choice = Math.random();
    if (choice < 0.34) {
       return "rock";
    } else if (choice < 0.67){
       return "paper";
    }
    else{
       return "scissors";
    }
   }
   let p = 0;
   let c = 0;
   computerSelection = getComputerChoice();
   function playRound(playerSelection , computerSelection){
     if (computerSelection == "rock" && playerSelection == "rock"  ) {
       text.textContent = "This round was a tie";
       secondtext.textContent = "You chose " + playerSelection + " while the computer chose " + computerSelection;
     }
     else if (computerSelection == "rock" && playerSelection == "paper") {
       text.textContent = "You won this round";
       secondtext.textContent = "You chose " + playerSelection + " while the computer chose " + computerSelection;
       p++;
       playerScore.textContent = p;
     }
     else if (computerSelection == "rock" && playerSelection == "scissors" ) {
         text.textContent = "You lost this round"; 
         secondtext.textContent = "You chose " + playerSelection + " while the computer chose " + computerSelection;   
         c++;
       computerScore.textContent = c;
     }
     else if (computerSelection == "paper" && playerSelection == "paper" ) {
       text.textContent = "This round was a tie";
       secondtext.textContent = "You chose " + playerSelection + " while the computer chose " + computerSelection;
     }
     else if (computerSelection == "paper" && playerSelection == "rock" ) {
           text.textContent = "You lost this round";
           secondtext.textContent = "You chose " + playerSelection + " while the computer chose " + computerSelection;
           c++;
           computerScore.textContent = c;
           
     }
     else if (computerSelection == "paper" && playerSelection == "scissors" ) {
          text.textContent = "You won this round";  
          secondtext.textContent = "You chose " + playerSelection + " while the computer chose " + computerSelection; 
          p++;
          playerScore.textContent = p; 
          
     }
   else if (computerSelection == "scissors" && playerSelection == "rock" ) {
         text.textContent = "You won this round";
         secondtext.textContent = "You chose " + playerSelection + " while the computer chose " + computerSelection;
         p++;
         playerScore.textContent = p;
         
   }
   else if (computerSelection == "scissors" && playerSelection == "paper" ) {
        text.textContent = "You lost this round";
        secondtext.textContent = "You chose " + playerSelection + " while the computer chose " + computerSelection;
        c++;
        computerScore.textContent = c;
     
  
   }
   else  {computerSelection == "scissors" && playerSelection == "scissors"
       text.textContent = "This round was a tie";
       secondtext.textContent = "You chose " + playerSelection + " while the computer chose " + computerSelection;   
   }
  }
  
  const rock = document.querySelector('.rock');
  const paper = document.querySelector('.paper');
  const scissors = document.querySelector('.scissors');
  const text = document.querySelector('.text');
  const secondtext = document.querySelector('.secondtext');
  let playerScore = document.querySelector('.youscore');
  let computerScore = document.querySelector('.computerscore');
  const body = document.body;
  body.appendChild(text);
  
  rock.addEventListener('click' , function() {
    computerSelection = getComputerChoice();
    playRound('rock' , computerSelection);
    checkGameResult();
  })
  
  paper.addEventListener('click' , function() {
  computerSelection = getComputerChoice();
    playRound('paper' , computerSelection);
    checkGameResult();
  })
  
  scissors.addEventListener('click' , function() {
    computerSelection = getComputerChoice()
    playRound('scissors' , computerSelection);
    checkGameResult();
  })
  function checkGameResult(){
    if(p==5){
      window.location.href = 'index2.html';
    }
    else if(c==5){
      window.location.href= 'index3.html';
    }
  }
  