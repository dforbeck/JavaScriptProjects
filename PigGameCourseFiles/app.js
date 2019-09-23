/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//declare all variables here
var scores, roundScore, activePlayer, dice;

scores = [0,0];// first and second player
roundScore = 0; // any round
activePlayer = 1;

//now dice takes on random variable from 1 to 6
// see notes on effect of each piece
dice = Math.floor(Math.random()*6)+1;
//console.log(dice);

//to get access to DOM
//selects the number by original score 43 element
//it's current because watn current not global
//GETTER Example
document.querySelector('#current-' + activePlayer).
textContent = dice; //changes the text content which is

//variable defined up top.
//because of coercion have now used the variable 
//above current with ActivePlayer piece.

//document.querySelector('#current-' + activePlayer).
//innerHTML = '<em>'+dice+'</em>';
//inner HTML has to be a string, "emphasized"/italics

//GETTER
//example: can use querySelector to only READ and store them
var x = document.querySelector('#score-0').textContent;
console.log(x);
//selects the values and stores them in the variable
//we dont't set it equal to anything, 
//we read the "content"

//Change the CSS style to none
//Want to make it disappear at outset
//change by style method, CSS display property, then CSS value 
document.querySelector('.dice').style.display = 'none';










