//Javascript Day01

console.log("welcome to javascript") 
 

//Single Line Comments 

/* multiline 
comments */


//Variable
let num1 ;


//Declaration
let num2;




//Initialization

num1=20;
num2 =10.0867;
console.log("data type of num2)"+typeof(num2))

let a = 12;

let c= 234;
let b = "12"
console.log(a+c);


//Data types
//Primitive data types
//Number ,boolean,string,null,symbol,undefined

let number = 20;
console.log(typeof(number))

let value = true;
console.log(typeof(value))

let name = "ram";
console.log(typeof(name));

name = 12345;
console.log(typeof(name))

let batchnum = null;
let batchnum1 = NaN;
console.log(typeof(batchnum))
console.log(typeof(batchnum1))



//Non Primitive Object and array

let skills = ["python","javascript","css",23846375 ]
// Array values can be accessed by indexs
//index start with 0
//Finding length of an array



console.log(skills[1]);
console.log(skills.length);

//Object
//  let person = {
//     name:"rajesh",
//     age:22,
//     batchno:61,
//     skills : ["html","css","javascript","bootstrap"]

// }
let employee ={
    empid: 123 ,
    empname:"shilpa",
    empaddress:"hyderabad",
    emproject:["hotelproject","timer", "circle"],
    emsalary: 40000
}
console.log(employee.empid);
console.log(employee.empname);
console.log(employee.empaddress);
console.log(employee.emproject[0]);
console.log(employee['empid']);
console.log(employee.emsalary);


// right angle star pattern
function starPrint(){
    let rows="";
    for( let i=1; i<=5; i++){
        for(let j=1; j<=i; j++){
            rows+="*";
        }
        rows+="\n"
    }
    return rows;
}
console.log(starPrint());


// square pattern
 function squarestar(){
    let rows="";
    for( let i=1; i<=5; i++){
        for( let j=1; j<=5; j++){
            rows+="*";
        }
        rows+="\n";
    }
    return rows;
 }
 console.log(squarestar());



 // reverseright pattern
 function reversestar(){
    let rows="";
    for( let i=1; i<=5; i++){
        for( let j=1; j<=5-i+1; j++){
            rows+="*";
        }
        rows+="\n";
    }
    return rows;
 }
 console.log(reversestar());
// basic pattern










