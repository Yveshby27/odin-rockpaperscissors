const choiceButtons=document.querySelectorAll('button');
const score=document.querySelector('.score');
const finalResult=document.querySelector('.final-result');

function getComputerChoice()//gets the computer's selection
{
    let choice;
    const arrofchoices=['rock','paper','scissors'];//possible choices for computer
    let random=Math.floor(Math.random()*3);//this randomly pick a number between 0 and 2 
    choice=arrofchoices[random];//randomly picks an element in the array of choices(arrofchoices)
    return choice;
}

function playRound(playerSelection,computerSelection)//plays 1 round of the game
{
    let win=false;
    let draw=false;
    let lose=false;//win,lose and draw are all false since the round has not begun yet
    let result;//this will contain the value that will be returned
    

if(playerSelection==='rock')//if user entered rock
{
    if(computerSelection==='scissors')
    win=true;//rock beats scissors
    else if(computerSelection==='paper')
    lose=true;//paper beats rock
    else
    draw=true;//tie, the user and the computer both have the same value(draw)
}
else if(playerSelection==='paper')
{
    if(computerSelection==='rock')
    win=true;//paper beats rock
    else if(computerSelection==='scissors')
    lose=true;//scissors beats paper
    else
    draw=true;
}
else//scissors
{
    if(computerSelection==='paper')
    win=true;//scissors beats paper
    else if(computerSelection==='rock')
    lose=true;//rock beats scissors
    else
    draw=true;
}

if(win===true)//if user wins
{
score.textContent=`You win!${playerSelection} beats ${computerSelection}`;
result=1;
}
else if(lose===true)//if user loses
{ 
score.textContent=`You lose.${computerSelection} beats ${playerSelection}`;
result=-1;
}
else//if it's a tie
{
score.textContent=`Draw`;
result=0;
}
return result;//return 1 if user wins, 2 if user loses and 0 if it's a draw
}
let userscore=0;
let computerscore=0;
function game()
{
choiceButtons.forEach(button=>{
    
    button.addEventListener('click',function play()
    {
        let ps=button.textContent;//for example:ps='rock' if user clicks the 'rock' button;
        let cs=getComputerChoice();
        let pr=playRound(ps,cs);
        if(pr===1)//user wins round
        userscore++;
        else if(pr===-1)//user loses round
        computerscore++;
        score.textContent=score.textContent+`.${userscore}-${computerscore}`;//keeps track of the current score
        if(userscore===5 ||computerscore===5)
        {
            if(userscore>computerscore)
            {
            finalResult.textContent=`YOU WIN.${userscore}-${computerscore}`;
                finalResult.classList.toggle('win');
            }
            else 
            {
                finalResult.textContent=`YOU LOSE.${userscore}-${computerscore}`;
                finalResult.classList.toggle('loss');
            }
           endGame();//if either player reaches 5 points, end the game
        }
    });
});
}
function endGame()
{
    choiceButtons.forEach(button=>{
        button.remove();//removes the choice buttons since the game is over
       })
       score.remove();//removes the display of the current score since the final result will be displayed
}
game();