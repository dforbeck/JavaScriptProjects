//CALCULATE BMIs AND THEN COMPARE

//Store Mark and John's weight(kg) and height(meters)in variables
var weightJohn, weightMark, heightJohn, heightMark;
weightJohn = 84;
weightMark = 82;
heightJohn = 1.74;
heightMark = 1.70;

//calculate BMI = mass / height^2
var bmiJohn, bmiMark;
bmiJohn = weightJohn / (heightJohn*heightJohn);
bmiMark = weightMark / (heightMark*heightMark);
console.log('Mark BMI:' + bmiMark + ' '+  'John BMI:' + bmiJohn)

//Find out if Mark is higher
var isMarkBMIHigher = bmiMark > bmiJohn;
console.log('Is the BMI for Mark higher than that of John?' + ' '+  isMarkBMIHigher);
console.log('Is Mark\'s BMI higher than John\s?' + ' '+  isMarkBMIHigher);
//the second one uses 'escape' method to put apostrophe