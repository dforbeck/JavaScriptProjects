//Find out average scores and declare winners

// declare and define variables
var teamJohnAverage = (89 + 120 + 103)/3
var teamMikeAverage = (116 + 94 + 123)/3
var teamMaryAverage = (97+ 134 + 105)/3

//Find out which one is higher and print out in console
// teamJohnAverage > teamMikeAverage ? console.log('Team John wins with average of ' + teamJohnAverage)
// : console.log('Team Mike wins with average of ' + teamMikeAverage)

//USE If/ELse

if (teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage) 
{
    console.log('Team John wins with average of ' + teamJohnAverage);
}
else if (teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage)
{
    console.log('Team Mike wins with average of ' + teamMikeAverage);
}
else if (teamMaryAverage>teamJohnAverage && teamMaryAverage>teamMikeAverage)
{
    console.log('Team Mary wins with average of ' + teamMaryAverage);
}
else 
{
    console.log('Tie game!');
}


