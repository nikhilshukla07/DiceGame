var roll=document.getElementById("roll")
roll.onclick=
function()
{
    var num1=Math.floor(Math.random()*6)+1;
    var num2=Math.floor(Math.random()*6)+1;
    document.getElementById("dice1").firstElementChild.src="images/dice"+num1+".png";
    document.getElementById("dice2").firstElementChild.src="images/dice"+num2+".png";
    if(num1>num2)
    {
        document.getElementById("result").innerText="Player 1 Wins";
    }
    else if(num1<num2)
    {
        document.getElementById("result").innerText="Player 2 Wins";
    }
    else
    {
        document.getElementById("result").innerText="It's a tie";
    }
}