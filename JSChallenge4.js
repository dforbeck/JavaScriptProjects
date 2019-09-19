//Challenge with MBIs. who's highest

var john = //john object
{
    firstName: 'John', 
    lastName: 'Smith',
    weight: 81,
    height: 1.7,
    calcBMI: function(weight, height)
    {
       this.BMI = this.weight/(this.height*this.height);
        return this.BMI; // here's where hand over the resulting calc
    }
};

var mark = //mark object
{
    firstName: 'Mark', 
    lastName: 'Jones',
    weight: 100,
    height: 1.9,
    calcBMI:function() //don't need height and weight in here with .this
    {
       this.BMI = this.weight/(this.height*this.height);
       return this.BMI; // need to get the resulting value
    }
};

// john.calcBMI(); // need to calculate BMI before If
// mark.calcBMI(); // but can also put in below comparison

if (john.calcBMI() > mark.calcBMI())
//if (john.BMI > mark.BMI)
{
    console.log(john.firstName +' '+ john.lastName + ' has a hgiher BMI at ' +john.BMI);    
}
else if (mark.calcBMI() >john.calcBMI())
{
    console.log(mark.firstName +' '+ mark.lastName + ' has a hgiher BMI at ' +mark.BMI);    
}
else 
{
    console.log('John and Mark have the same BMI');
}
