function getcomputerchoice()
{
    let choice;
    const arrofchoices=['rock','paper','scissors'];//possible choices for computer
    let random=Math.floor(Math.random()*3);//this randomly pick a number between 0 and 2 
    choice=arrofchoices[random];//randomly picks an element in the array of choices(arrofchoices)
    return choice;
}
function playround(playerselection,computerselection)
{
    let win=false;
    let draw=false;
    let lose=false;
    let result;
    while(isValid(playerselection)===false)
    {
        playerselection=prompt("Enter a valid answer(rock-paper-scissors");
    }
    let ps=playerselection.toLowerCase();
if(ps==='rock')
{
    if(computerselection==='scissors')
    win=true;
    else if(computerselection==='paper')
    lose=true;
    else
    draw=true;
}
else if(ps==='paper')
{
    if(computerselection==='rock')
    win=true;
    else if(computerselection==='scissors')
    lose=true;
    else
    draw=true;
}
else
{
    if(computerselection==='paper')
    win=true;
    else if(computerselection==='rock')
    lose=true;
    else
    draw=true;
}

if(win===true)
{
console.log(`You win!${playerselection} beats ${computerselection}`);
result=1;
}
else if(lose===true)
{
    
console.log(`You lose.${computerselection} beats ${playerselection}`);
result=-1;
}
else
{
console.log(`Draw`);
result=0;
}
return result;
}
function isValid(playerselection)
{
    if(playerselection.toLowerCase()==='rock' || playerselection.toLowerCase()==='paper' || playerselection.toLowerCase()==='scissors')
    return true;
    return false;
}

function game()
{
    let ps;
    let userscore=0;
    let computerscore=0;
    for(let i=0;i<5;i++)
    {
        ps=prompt('Enter an answer');
        pr=playround(ps,getcomputerchoice());
        if(pr===1)
        userscore++;
        else if(pr===-1)
        computerscore++;
    }
    if(userscore>computerscore)
    console.log(`YOU WIN.Score:${userscore}-${computerscore}`);
    else
    console.log(`YOU LOSE.Score:${userscore}-${computerscore}`);
}
game();
