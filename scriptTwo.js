
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

/*
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

*/

/*

//ARRAYS

//initializ array
var names = ['John', 'Mary', 'Jane'];
var years = new Array(1990, 2010, 1993);

console.log(names[2]); //how retreive
console.log(names.length); // how many elements

//can change/mutate data
names[1] = 'Ben';
//names[5] = 'Mary';
names[names.length] = 'Mary'; // puts it as last element
console.log(names);

//different data types
var john =['John', 'Smith', 1972, 'teacher', false];

//push method
john.push('blue'); // adds element to end of array
console.log(john);

john.unshift('Mr.'); // adds to beginning
console.log(john);

john.pop(); //removes the last element
console.log(john);

john.shift(0); // removes the first element
console.log(john);

console.log(john.indexOf(1972)); // position year appears in array
//can test if element is in an array or not.

console.log(john.indexOf(23)); // will show -1

var isDesigner = john.indexOf(23) === -1 ? 'John is not as old as I thought'
: 'John is a GenX';
console.log(isDesigner);
//testing what's in the array above

*/

/*
//OBJECTS and PROPERTIES 

//object "literal"
var john = //john object
{
    firstName: 'John', //firstName is a property of John
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob'], // can put array inside object
    job:'teacher',
    isMarried: false
}
console.log(john.firstName); // read properties with .
console.log(john['lastName']); // read with brackets

var x = 'birthYear';
console.log(john[x]); // can reassign/mutate a property

john.job ='designer'; //mutate
john['isMarried'] = true; //in bracket mutation
console.log(john);

//object "syntax"
//other way to create object

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1989;
jane['lastName'] = 'Smith';

console.log(jane);

*/

/*
//OBJECTS AND METHODS
//can attach functions to objects, these are called "methods"

var john = //john object
{
    firstName: 'John', //firstName is a property of John
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob'], // can put array inside object
    job:'teacher',
    isMarried: false,
    calcAge: function(birthYear) //don't need birthyear with .this
    {
       this.age = 2018- this.birthYear;
        // return 2018- this.birthYear; // means that object birthyear
        //john.birthYear
    }
};
//method called to calculate age
//console.log(john.calcAge());
//john.age = john.calcAge();
john.calcAge();
console.log(john)

*/

//LOOPS and ITERATIONS

