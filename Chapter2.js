// single file comment

/* multiple
line
comment */

//Conditional Statement
//If statement
let age = 25;
if(age > 18){
    console.log("You can vote")
}

if(age< 18){
    console.log("You cann't vote")
}

//If-else statement

let Age = 18;
if(Age > 18){
    console.log("You can vote");
}

else
{
    console.log("You cann't vote");
}

//else-if statement

let mode = 'Blue';
let color;
if(mode == 'dark'){
    color = 'Black';
}
else if(mode == 'pink'){
    color = 'pink';
}
else if(mode == 'Blue'){
    color = 'blue';
}
else{
    color = 'white';
}

console.log(color);

// Ternary Operators

let a = 56

let result = a >=18? "Yes":"No";
console.log(result)

let A = 56

A <=18? console.log("Yes"):console.log("No");

// Practise Question 

//Get user to input a number using prompt("Enter a number"). check if the number is multiple of 5 or not

//Prompt

let name = prompt("Enter your name");
console.log(name);

//Problem

let number = prompt("Enter a number");

if(number % 5 == 0){
    console.log("Yes, Disible by 5")
}
else{
    console.log("No, Not disible by 5")
}

// Write a code which can give grades to student according to their score

let score = prompt("Enter a score of student to find the grade:");

if(score >= 0 && score <= 45){
    console.log("F")
}
else if(score >= 50 && score <= 59){
    console.log("D")
}
else if(score >= 60 && score <= 69){
    console.log("c")
}
else if(score >= 70 && score <= 79){
    console.log("B")
}
else if(score >= 80 && score <= 100){
    console.log("A")
}
