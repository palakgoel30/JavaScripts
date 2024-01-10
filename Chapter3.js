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