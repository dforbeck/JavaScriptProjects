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


//IF ELSE Statements

var firstName = 'John';
var civilStatus = 'married';

// this triple equals returns a true or false answer
if(civilStatus === 'married') 
{
    console.log(firstName + ' is married!');
}