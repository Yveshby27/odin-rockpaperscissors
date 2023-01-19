function getcomputerchoice()
{
    let choice;
    const arrofchoices=['Rock','Paper','Scissors'];//possible choices for computer
    let random=Math.floor(Math.random()*3);//this randomly pick a number between 0 and 2 
    choice=arrofchoices[random];//randomly picks an element in the array of choices(arrofchoices)
    return choice;
}

