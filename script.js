/*


console.log('Hello World!!!');


// variable naming rule comment
var firstName = 'John';
console.log(firstName);

var lastName = 'Doe';
var age = 28;

var fullAge = true;
console.log (fullAge);

var job;
console.log(job);

job ='Teacher';
console.log(job);

//variable mutation and coercion
//this is type coercion by converting age into a string
console.log(firstName + '' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '+ job + '. Is he Married?'+ isMarried);

//variable mutation
age = 'twenty eight';
job = 'driver'

//alert is the popup window that requires Ok input
alert(firstName + ' is a ' + age + ' year old '+ job + '. Is he Married?'+' '+ isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName +' '+ lastName);


*/


/*

//Basic operators

//can declare the all the variables here
var year, yearMark, yearJohn;

//define them here
now = 2020;
ageMark= 33;
ageJohn = 28;

yearJohn = now  - ageJohn;
yearMark = now - ageMark; 

console.log(yearJohn);
console.log(now +2);
console.log(now -2);
console.log(now/10);

//Logical operators
var johnOlder = ageJohn > ageMark; //the value of variable will be false because the realtionship is not true.
console.log(johnOlder); //this prints out the value of the variable

//typeof operator
console.log(typeof johnOlder); //returns that it is a Boolean
console.log(typeof ageJohn );
console.log(typeof 'Mark is older');

var x;
console.log(typeof x); //will return undefined.


//Operator precedence

//Multiple operators
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2; //with no () the / has precedence.  
console.log(average);

//Multiple assignments
var x, y;

x= y = (3 + 5) * 4 - 6 // 8*4-6 // 32-6 // 26
console.log(x, y);
//here also since the assignment operator goes from right to left, it reads first y = stuff, and then y = x.  So y (or x) is never undefined.

//More operators
x = x*2;
//is same as
x *= 2
console.log(x);
//other example, adding 10 to the above.
x += 10;
console.log(x);
//Example of only adding 1
x = x+1;
x += 1;
x ++;
//all above are all the same
console.log(x);
x --; //same as above, but with minus

*/


/*
//IF ELSE Statements

var firstName = 'John';
var civilStatus = 'single';

// this triple equals returns a true or false answer
if(civilStatus === 'married') 
{
    console.log(firstName + ' is married!');
}
else 
{
    console.log(firstName + ' will hopefully marry soon ;)');
}
// or can have a booleon

var isMarried = true;
if(isMarried) // don't need to specify true, because assumes 
{
    console.log(firstName + ' is married!');
}
else 
{
    console.log(firstName + ' will hopefully marry soon ;)');
}

//OTHER IF ELSE EXAMPLE:
//calculate BMI = mass / height^2
var weightJohn, weightMark, heightJohn, heightMark;
weightJohn = 84;
weightMark = 82;
heightJohn = 1.74;
heightMark = 1.70;

var bmiJohn, bmiMark;
bmiJohn = weightJohn / (heightJohn*heightJohn);
bmiMark = weightMark / (heightMark*heightMark);

console.log('Mark BMI:' + bmiMark + ' '+  'John BMI:' + bmiJohn)

//OR use True/Fals statements

if (bmiMark < bmiJohn) 
{
    console.log('Mark\s BMI is higher than John\s');
}
else
{
    console.log('John\'s BMI is higher than Mark\'s');
}

*/

/*
//BOOLEAN LOGIC

var firstName = 'John';
var age = 20;

if (age<13)
{
    console.log(firstName + ' is a boy.');
}
else if (age >= 13 && age <20) //betwween 13 and 20 >=13 and also <20
{
    console.log(firstName + ' is a teenager.');
}
    else if (age >=20 && age <30)
    {
        console.log(firstName + ' is a young man.');
    }
else
{
    console.log(firstName + ' is a man.');
}

*/
//TERNARY OPERATOR

var firstName = 'John';
var age = 16;

age >=18 ? console.log(firstName + ' drinks beer.')  // first part is the if
//it's like asking a question:  is age >=18?
: console.log(firstName + ' drinks juice'); //this is the else part

var drink = age >= 18 ? 'beer' : 'juice';  //values assigned to drink variable
console.log(drink);
//could have written below if statement, but above is simpler
//if (age >=18){
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

/*
//SWITCH Statement
//cleaner than if else
var job = 'cop';
switch(job)
{
    case 'teacher':
    case 'instructor': //below will execute with both cases
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber');
        break;
    case 'designer':
        console.log(firstName + ' builds websites');
        break; // beacause otherwise keeps evaluations
    default:
        console.log(firstName + ' does something else');
}

age =10;
switch(true)
{
    case age <13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age <20:
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age <30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a young man');

}
*/

//TRUTHY AND FALSY VALUES
var height;
height = 23;  //if leave this out, declared, but not defined.

if (height || height ===0)  // must define 0 because o is falsy.
{
    console.log('Variable has been defined.')
}
else {
    console.log('Variable has not been defined.')
}

//EQUALITY OPERATORS
// === strict equality
// == type coercion

if (height =='23'){ // converts string to number and will keep going
    console.log('the == does type coercion');
}




