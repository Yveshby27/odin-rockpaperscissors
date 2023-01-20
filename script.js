function getcomputerchoice()//gets the computer's selection
{
    let choice;
    const arrofchoices=['rock','paper','scissors'];//possible choices for computer
    let random=Math.floor(Math.random()*3);//this randomly pick a number between 0 and 2 
    choice=arrofchoices[random];//randomly picks an element in the array of choices(arrofchoices)
    return choice;
}
function playround(playerselection,computerselection)//plays 1 round of the game
{
    let win=false;
    let draw=false;
    let lose=false;//win,lose and draw are all false since the round has not begun yet
    let result;//this will contain the value that will be returned
    while(isValid(playerselection)===false)//if the answer is invalid
    {
        playerselection=prompt("Enter a valid answer(rock-paper-scissors)");//keep repeating till user enters a valid answer
    }
    let ps=playerselection.toLowerCase();//turn the user answer to lower case 
if(ps==='rock')//if user entered rock
{
    if(computerselection==='scissors')
    win=true;//rock beats scissors
    else if(computerselection==='paper')
    lose=true;//paper beats rock
    else
    draw=true;//tie, the user and the computer both have the same value(draw)
}
else if(ps==='paper')
{
    if(computerselection==='rock')
    win=true;//paper beats rock
    else if(computerselection==='scissors')
    lose=true;//scissors beats paper
    else
    draw=true;
}
else//scissors
{
    if(computerselection==='paper')
    win=true;//scissors beats paper
    else if(computerselection==='rock')
    lose=true;//rock beats scissors
    else
    draw=true;
}

if(win===true)//if user wins
{
console.log(`You win!${playerselection} beats ${computerselection}`);
result=1;
}
else if(lose===true)//if user loses
{ 
console.log(`You lose.${computerselection} beats ${playerselection}`);
result=-1;
}
else//if it's a tie
{
console.log(`Draw.`);
result=0;
}
return result;//return 1 if user wins, 2 if user loses and 0 if it's a draw
}
function isValid(playerselection)//check if the answer enter by the user is valid
{
    if(playerselection.toLowerCase()==='rock' || playerselection.toLowerCase()==='paper' || playerselection.toLowerCase()==='scissors')//answer has to be one of rock,paper or scissors
    return true;//return true if valid
    return false;//return false if invalid 
}

function game()//plays 5 rounds of the game
{
    let ps;
    let userscore=0;//initial score of the user
    let computerscore=0;//initial score of the computer
    for(let i=0;i<5;i++)//runs 5 times
    {
        ps=prompt('Enter an answer');
        pr=playround(ps,getcomputerchoice());//store the playround() function in a variable named pr
        if(pr===1)//if playround() returns 1=>user wins=>increment score for user
        userscore++;
        else if(pr===-1)//if playround() returns -1=>user loses=>increment score for computer
        computerscore++;
    }
    if(userscore>computerscore)//if the total score of the user is greater than that of the computer's
    console.log(`YOU WIN.Score:${userscore}-${computerscore}`);
    else if(userscore<computerscore)//if the total score of the user is less than that of the computer's
    console.log(`YOU LOSE.Score:${userscore}-${computerscore}`);
    else//if the user and the computer have the same score 
    console.log(`DRAW.Score:${userscore}-${computerscore}`);
}
game();
