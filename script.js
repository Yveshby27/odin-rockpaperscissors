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
else{
    if(computerselection==='paper')
    win=true;
    else if(computerselection==='rock')
    lose=true;
    else
    draw=true;
}
if(win===true)
result=`You win!${playerselection} beats ${computerselection}`;
else if(lose===true)
result=`You lose.${computerselection} beats ${playerselection}`;
else
result=`Draw`;
return result;
}
function isValid(playerselection)
{
    if(playerselection.toLowerCase()==='rock' || playerselection.toLowerCase()==='paper' || playerselection.toLowerCase()==='scissors')
    return true;
    return false;
}
