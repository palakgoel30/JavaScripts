console.log("Hello JS!!!!"); // to print 

name = "Palak" // Variable
console.log(name)
x= null;
y= undefined;
console.log(x,y);

isFollow = 'True'
console.log(isFollow) 
console.log(typeof isFollow)  // typeof used to check the type of a variable.

// Object DataType

const student = {
    fullNane : 'Ram',
    age : 23,
    cgpa : 8.9,
    isPass : 'True'
};

console.log(student)
console.log(student['age'])   //23
console.log(student.cgpa)     //8.9
console.log(typeof student)   // Object
console.log(typeof student["cgpa"]) // number