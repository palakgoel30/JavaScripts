//loops
//For loop

for(let i = 1; i<=5;i++){
    console.log(i, "My name is Palak");
}

// while

let i = 1                             //Initaization
while(i<=5){                         //Condition
    console.log("i =",i);
    i++;                            // Updation
}

//do while
 let j= 20                        // Initaization
do{
    console.log("j= ",j);
    j++;                         // Updation
} while(j<= 21);                // Condition

// for-of loop

let str = "Palak";
let size = 0;
for(let val of str){
    console.log("char = ",val);
    size ++;
}
console.log("size of a string: ",size)

// for-in loop

let Student = {
    fullNane : 'Ram',
    age : 23,
    cgpa : 8.9,
    isPass : 'True'
};

for(let key in Student){
    console.log("key :",key, "Value: ",Student[key]);
}

// String
let str1 = "ApnaNaam"
console.log(str1.length) // 8
console.log(str1[3]) //a

//Template Literals

let obj = {
    item :'pen',
    price : 10
};

console.log("The cost of ",obj.item," is ",obj.price," ruppes")  // The cost of pen is 10 ruppes.

//using template literals

let Object = `The cost of ${obj.item} is ${obj.price} ruppes`;
console.log(Object)

// String Methods

let strings = 'Hello'
console.log(strings.slice(0,3)) // 'Hel'

let strings2 = 'pooja'
console.log(strings.concat(strings2)) // 'Hellopooja'

console.log(strings.replace('lo','p')) // 'Help'

// Practice Question
let fullName = prompt('Enter your full name');
let username = `@${fullName}${fullName.length}`
console.log(username)