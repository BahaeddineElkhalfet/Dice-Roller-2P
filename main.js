//Generate a Random number from 0 to 6

var firstRandomNumber=Math.floor(Math.random()*6)+1
//images/dice1 to dice6
var firstDiceImage="Dices/dice"+firstRandomNumber+".png";

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

//Generate a Random number from 0 to 6

var secondRandomNumber=Math.floor(Math.random()*6)+1
//images/dice1 to dice6
var secondDiceImage="Dices/dice"+secondRandomNumber+".png";

document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

//Logic for Winner
if (firstRandomNumber>secondRandomNumber){
    document.querySelector('h1').innerHTML = 'The Winner is Player 1'
}else if (firstRandomNumber<secondRandomNumber){
    document.querySelector('h1').innerHTML = 'The Winner is Player 2'
}else {
    document.querySelector('h1').innerHTML = 'Its Draw'
}
