// wap to find the given number is positive or not
function isPositive(num){
if(num>0){
    return "positive number"
}
else if(num<0){
    return "negative number"
}
else if(num==0){
    return "it is neutral number"
}
else{
    return "not defined"
}
}
console.log(isPositive(10))
console.log(isPositive(20))
console.log(isPositive(-7))
console.log(isPositive("shilpa"))

 function isoddevenNum(num){
    if(num%2==0){
        return "evennum"
    }
    else{
        return "oddnum"
    }

 }
 console.log(isoddevenNum(4))
 console.log(isoddevenNum(3))
 console.log(isoddevenNum(7))


function isValidNumber(num){
    if(isNaN(num)){
        return "notvalid"
    }
    else{
        return "valid"
    }

 }
 console.log(isValidNumber(4))
 console.log(isValidNumber("xyz"))
 console.log(isValidNumber(7))

 function isLargestNum(num1,num2){
    if(num1>num2){
        return "It is a larger number"
    }
    else if(num1<num2) {
        return "it is a smaller number"
    }
   else{
    return "equal"
   }
 }
 console.log(isLargestNum(4,8))
 console.log(isLargestNum(6,3))
 console.log(isLargestNum(7,7))

 


 function isLargestThreeNum(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return "It is a largest number"
    }
    else if(num2>num1 && num2>num3) {
        return "it is a larger then num3 number"
    }
   else{
    return " num3 is a largest number"
   }
 }
 console.log(isLargestThreeNum(4,8,7))
 console.log(isLargestThreeNum(6,3,2))
 console.log(isLargestThreeNum(7,7,8))



// conditional statement-  based on the condi excute the statement
// looping statement-repeatedly if u want to excute the statement
// if u want to access i so you need to var variable bcz let scope is not the outside of the block
// let you can not redeclared same  variable (block scope variable) but reassigned the value
// var redeclared 
// const not redeclared and reasssign the value(scope is block scope )

// for(let i=0;i<=5; i++){
//     console.log("hello")

// }
// for(let i=0;i<=5; i++){
//     console.log(i)

// }

// write a program to print table
function Table(num){
 for( let i=1; i<=10; i++){
    // console.log(num + "*" + i + "=" + (num*i))
    console.log(`${num} *${i} =${num*i}`)
 }
}
(Table(2))


// write a program to find the sum of elements
// input is[1,2,3,4,5]
// let mynum=[1,2,3,4,5];
// let sum=0;
// for(let i=0; i<mynum.length;i++){
//     sum+=mynum[i];
// }
// console.log(sum)


// let sum=0;
// let array=[1,2,3,4,5]
// for(i=0;i<array.length;i++){
//     sum=sum+array[i]
// }
// console.log(sum)


function sumOfElement(array){
   
let sum=0;
for( let i=0; i<array.length;i++){
    sum=sum+array[i]
}
return sum
}
let array=[1,2,3,4,5]
console.log(sumOfElement(array))