# JavaScripts
Hi Java Scripts,

JavaScript is a dynamically typed language.

<H3> Variable Rules </H3>
<ul> 
    <li>Variables names are case sensitive; 'a' & 'A' are different.</li>
    <li>Only letters,digits,underscrore(_) and $ is allowed.</li>
    <li>only a letter,underscrore(_) or $ should be first character.</li>
    <li>Reversed words cannot be variable names</li>
    <li>Variables used to used with var,let or const.</li>
</ul>

var : variable can be re-declared & updated. A global scope variable.
let : variable cann't be re-declared but can be updated.A block scope variable.
const : variable cann't be re-declared nor updated.A block scope variable.

<H3> DataType</H3>
<ul>
    <li> Numbers</li>
    <li> String</li>
    <li> Boolean</li>
    <li> Undefiend</li>   
    <li> Null</li>
    <li> Bigint</li>
    <li> Symbol</li>
    <li> Objects</li>
</ul>

<H3> Operators </H3>
<ul>
    <li> Airthmetic opertors:  +,-,*,\</li>
    <li> Modular Operator: %(used to calculate reminder)</li>
    <li> Exponational: **(used to calculate power)</li>
    <li> Uninary Operatory: incremental,decremental operator(--a,++a,a--,a++)</li>
    <li> Assignment Operator: +=,-=,*=,%=,**=,==</li>
    <li> Comparsion Operator: ==,!=(used to check only values) ; ===,!==(used to check values & data type)</li>
    <li> Logical operator: &&,||,!</li>
</ul>

<H3>Conditional Statement</H3>

<H4> If Statement <H4>
<H7>Example</H7>
let age = 25;
if(age > 18){
    console.log("You can vote")
}

<H4> If-else Statement<H4>
<H7>Example</H7>
let age = 18;
if(age > 18){
    console.log("You can vote");
}

else
{
    console.log("You cann't vote");
}

<H4> Else-if Statement </H4>
<H7>Example</H7>
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

<H4> Ternary Operators </H4>
(Thats take 3 operands)
Condition ? true output:False Output
<H7>Example1</H7>
let a = 56;

let result = a >=18? "Yes":"No";
console.log(result);

<H7>Example2</H7>

let A = 56
A <=18? console.log("Yes"):console.log("No");

<H3> Prompt & Alert</H3>
prompt is used to popup a message to gets some input.

prompt("enter your name")

Alert is used to pop up a message, it is used to create one time pop up.

Alert("Hello !!!!")

<H3> Loops </H3>
<H4> For Loop</H4>
for(let i = 1; i<=5;i++){
    console.log(i, "My name is Palak")
}
<H4> While Loop</H4>
let i = 1   // initalization
while(i<=5){  // condition
    console.log("i =",i);
    i++;      //updation
}

<H4> Do While loop</H4>
 let j= 20                        // Initaization
do{
    console.log("j= ",j);
    j++;                         // Updation
} while(j<= 21);                // Condition

<H4> for-of loop</H4> :- it runs to itrate string and array

let str = "Palak";
let size = 0;
for(let val of str){
    console.log("char = ",val);
    size ++;
}
console.log("size of a string: ",size)

<H4> for-in loop </H4>

let Student = {
    fullNane : 'Ram',
    age : 23,
    cgpa : 8.9,
    isPass : 'True'
};

for(let key in Student){
    console.log("key :",key, "Value: ",Student[key]);
}

<H3> String </H3> 
<H6> Are immutable, having functions and properties as a method<H6>
<ol>
<li><H5> str.length</H5></li>
<li><H5> str[index]</H5></li>
<li><H5> Template Literals</H5></li>
<li><H5> Escape character </H5> :- /n /t</li>
<li><H5> String Method </H5> (not convert the orinal string)
str.toUpperCase :- 'abc' --> 'ABC'(convert all charater into upper letter)
str.trim :- (removes all the whitespaces from ending and starting)
str.slice :- (it returns the part of string)
str1.concat(str2) :- (combine str1 and str2)
str.replace('searchvalue','newvalue') : to change the character with new value (replace just onces)
str.replcaAll('searchvalue','newvalue) : to change all the mentioned charcter by new value</li></ol>

<H3> Arrays </H3>
<H5> Array Methods </H5>
<ul> <li>Push() :- to add items at last and returns the length of array</li>
<li> Pop() :- delete the items from last</li>
<H3> Functions & Methods </H3>
<H5> Function Defination</H5>
function functionName(){ 
    
     // to do work
}