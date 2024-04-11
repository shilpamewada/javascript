// perform airthmetic operations on two numbers

// function evalNumber(num1,num2,op){
//     if(op=="add"){
//         console.log(`sum of ${num1} and ${num2} is ${num1+num2}`)
//     }
//    else if(op=="subtract"){
//         console.log(`Difference of ${num1} and ${num2} is ${num1-num2}`)
//     }
//     else if(op=="multiply"){
//         console.log(`Multiplication of ${num1} and ${num2} is ${num1*num2}`)
//     }
//     else if(op=="divide"){
//         console.log(`Division of ${num1} and ${num2} is ${num1/num2}`)
//     }
//     else if(op=="modulus"){
//         console.log(`/modulus of ${num1} and ${num2} is ${num1%num2}`)
//     }
//     else{
//         console.log(`${op} is an invalid operation`)
//     }

// }
// evalNumber(15,30,"add")
// evalNumber(15,30,"subtract")
// evalNumber(15,30,"multiply")
// evalNumber(15,30,"divide")
// evalNumber(15,30,"modulus")
// evalNumber(15,30,"square")

// find check  if a year is leap year or not
// divide by 4 but not divide by 100 and divide by 400------{(year%4==0) and (year%4==0) || (year400%==0)}
function checkLeapyear(year){
if((year%4==0  &&  year%100!=0) ||(year%400==0)){
    // console.log(`the year ${year} is a leap year `)
    return "leap Year"
}
else{
    // console.log(`the year ${year} is not a leap year`)
    return "not leap year"
}
}
// checkLeapyear(2000)
// checkLeapyear(2011)
console.log(checkLeapyear(2013))
console.log(checkLeapyear(2000))

// find the grade for innput marks

function findGrade(name,marks){
    if(marks>=90 && marks<=100){
        console.log(`${name} you have received S grade`)
    }
   else if(marks>=80 && marks<90){
        console.log(`${name} you have received A grade`)
    }
    else if(marks>=70 && marks<80){
        console.log(`${name} you have received B grade`)
    }
    else if(marks>=60 && marks<70){
        console.log(`${name} you have received C grade`)
    }
    else if(marks>=50 && marks<60){
        console.log(`${name} you have received D grade`)
    }
    else if(marks>=40 && marks<50){
        console.log(`${name} you have received E grade`)
    }
    else if(marks>=0 && marks<40){
        console.log(`${name} you have failed `)
    }
    else{
        console.log(`invalid marks of ${marks}`)
    }

}
findGrade("shilpa rana",92)
findGrade("rohan",85)
findGrade("dipesh",73)
findGrade("shan",53)
findGrade("neha",20)
findGrade("renu",120)