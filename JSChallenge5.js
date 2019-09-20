//Tip calculator

var dinnerWithJohn = //dinner object
{
    bills: [124, 48, 268, 180, 42],
    calcTips: function() // don't put bill in here since using array
    {
        this.billTips= []; // empty arrays to fill in calc
        this.totalBills=[]; //declared empty ones here
      
        for (var i=0; i <= (this.bills.length-1); i++)
        // put -1 because last iteration causes NaN using .this
        {
            var tip;
            var bill = this.bills[i]; // need to loop exactly through that array
            //stored value in this variable
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
           //add results to the current array position
           //here add the value to the current tip position
            this.billTips[i] = (bill * tip);
            //remember that bill and tip defined above.
            this.totalBills[i]= this.billTips[i]+ bill;
        }
    }
}
dinnerWithJohn.calcTips();  // calculate everything
//console.log(dinnerWithJohn); // show everything

var dinnerWithMark = //dinner object
{
    bills: [77, 475,110, 45],
    calcTips: function() // don't put bill in here since using array
    {
        this.billTips= []; // empty arrays to fill in calc
        this.totalBills=[]; //declared empty ones here
      
        for (var i=0; i <= (this.bills.length-1); i++)
        // put -1 because last iteration causes NaN using .this
        {
            var tip;
            var bill = this.bills[i]; // need to loop exactly through that array
            //stored value in this variable
            if (bill < 100)
            {
                tip = .2;
            }
            else if (bill >= 100 && bill <= 300)
            {
                tip = .10;
            }
            else 
            {
                tip = .25;
            }
           //add results to the current array position
           //here add the value to the current tip position
            this.billTips[i] = (bill * tip);
            //remember that bill and tip defined above.
            this.totalBills[i]= this.billTips[i]+ bill;
        }
    }
}
dinnerWithMark.calcTips();
//console.log(dinnerWithMark); // show everything

//Get the average funcion ready
function calcTipAverage(tips)
{
    var sum = 0;
    for (var i = 0; i < (tips.length); i++) 
    {
    sum = sum + tips[i]; 
    }
    return sum/(tips.length);
}

dinnerWithJohn.average = calcTipAverage(dinnerWithJohn.billTips); // just need to name the array
dinnerWithMark.average = calcTipAverage(dinnerWithMark.billTips);
console.log(dinnerWithJohn, dinnerWithMark)

if (dinnerWithMark.average > dinnerWithJohn.average)
{
    console.log('Mark paid the highest tip with average of '+ dinnerWithMark.average);
}
else
{
    console.log('John paid the highest tip with average of '+ dinnerWithJohn.average);
}

