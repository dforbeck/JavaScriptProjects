//CHALLENGE
//Tip calculator

//was very close, here it is adjusted.
// just want the resulting arrays

var defineTip = function (bill)
{
    var tip;
    if (bill < 50)
    {
        tip = .2;
    }
    else if (bill >= 50 && bill <= 200)
    {
        tip = .15;
    }
    else 
    {
        tip = .10;
    }
   
    return bill*tip; // return a calculation
    //of what just defined
}

var bills =[124, 48, 268];
var tips = [
    defineTip(bills[0]),
    defineTip(bills[1]), 
    defineTip(bills[2])
];
var totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
];

console.log(bills);
console.log(tips);
console.log(totals);
