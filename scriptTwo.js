
//FUNCTIONS

/*
function calculateAge(birthYear)// birth year is argument that passing
{
    return 2018-birthYear; //something created from data and used
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948); 
var ageJane = calculateAge(1969);  
console.log(ageJohn, ageMike, ageJane);
//calling fucntion and stored in ageJohn.

//years left before retirement
function yearsBeforeRetirement(year, firstName)
{
    var age = calculateAge(year); //funcitons can call other functions
    var retirement = 65 - age;
    if (retirement >0)
    {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }
    else
    {
        console.log('Yey! ' + firstName + ' is retired!')
    }
}

yearsBeforeRetirement(1990, 'John');

*/

//FUNCTION STATEMENTS AND EXPRESSIONS

//function declaration
// function whatDoYouDo(job, firstName)
// {

// }


//funcion expression, assigned to a variable
var whatDoYouDo = function(job, firstName)
{
    switch(job)
    {
        case 'teacher':
            return firstName + ' teaches.' // don't break because 
            //returns back and finishes
        case 'driver':
            return firstName + ' drives.'
        case 'designer':
            return firstName + ' designs.'
        default:
            return firstName + ' does something else.'
    }
}

console.log(whatDoYouDo('teacher', 'John')); // call function and pass in values
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('driver', 'Mike'));