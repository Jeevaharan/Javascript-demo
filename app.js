const game=()=>{
    let pScore=0;
    let cScore=0;

    const startGame=()=>{
        const playBtn =document.querySelector('.intro button');
        const introScreen =document.querySelector('.intro');
        const match =document.querySelector('.match');

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut')
            match.classList.add("fadeIn");
        });
    };

   //Play match

   const playMatch =()=>{
       const options=document.querySelectorAll('.options button');
       const playerHand = document.querySelector(".player-hand");
       const computerHand = document.querySelector(".computer-hand");
       const hands =document.querySelectorAll('hands img');

       hands.forEach(hand =()=>{
           hand.addEventListener('animationed',function(){
               this.style.animation='';
           })
       })
       
       //computer options
       const computerOptions =["rock","paper","scissors"];

       options.forEach(option=>{
         option.addEventListener('click',function(){
              //computer choice
              const computerNumber =Math.floor(Math.random()*3);
              const computerChoice = computerOptions[computerNumber];

              
              
              compareHands(this.textContent,computerChoice);
             //update images
            //console.log(this.textContent);
              playerHand.src=`./assets/${this.textContent}.png`;
              computerHand.src=`./assets/${computerChoice}.png`;

            //Animation
              playerHand.style.animation ="shakePlayer 2s ease";
              computerHand.style.animation="shakeComputer 2s ease";

         });  
       });
   }



   const updateScore=()=>{
       const playerScore = document.querySelector('.player-score p');
       const computerScore = document.querySelector('.computer-score p');
       playerScore.textContent=pScore;
       computerScore.textContent=cScore;
   }

   const compareHands =(playerChoice,computerChoice)=>{
       //Update text
        const winner =document.querySelector('.winner');
        if(playerChoice===computerChoice){
            winner.textContent='It is a tie';
            return;
        }
        //rock
        if(playerChoice==='rock'){
            if(computerChoice==='scissors'){
                winner.textContent='Player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent='Computer Wins';
                cScore++;
                updateScore();
                return;
           }
        }

        //paper
        if(playerChoice==='paper'){
            if(computerChoice==='scissors'){
                winner.textContent='Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent='Player Wins';
                pScore++;
                updateScore();
                return;
           }
        }
        //scissors
        if(playerChoice==='scissors'){
            if(computerChoice==='rock'){
                winner.textContent='Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent='Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }

   }


    //call all the inner functions
    startGame();
    playMatch();
    //updateScore();
};

//start game func
game();