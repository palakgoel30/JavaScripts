// Function defining

function myFunction(){
    console.log("Welcome back !!!!")
    console.log("Time to learn Javascripts")
}

// Function call or revoke

myFunction();

// Function defining with parameter

function myFunction1(msg){ //msg --> Paramter
    console.log(msg)
}
myFunction1("I Love JS");

function sum(a,b){
    
    return a+b
}
let x = sum(12, 78);
console.log(x);

// ArrowFunction

let arrowsum = (a,b) => {return a+b};
console.log(arrowsum(3,7))

//Practice Question1

function numberOfVowels(str){
    let count = 0
    for(let i of str){
        if((i ==='a')|| (i=== 'e')||(i ==='i')||(i ==='o')||(i==='u')){
            count +=1
        }
    }
    return count
}

console.log(numberOfVowels("Helloyuu"));