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
let age = 25;
if(age > 18){
    console.log("You can vote")
}

<H4> If-else Statement<H4>
let age = 18;
if(age > 18){
    console.log("You can vote");
}

else
{
    console.log("You cann't vote");
}

<H4> Else-if Statement </H4>
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
