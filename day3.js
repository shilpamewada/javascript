// wap to find the missing number in given array
// input:[1,2,4,5,6]
// 3
// input[1,3,4,5]
// 2
// function missingNumber(){

// }
// console.log(missingNumber([1,2,3,5]))


// find a number of days in given month
 function checkLeapyear(year){
return (((year%4==0) && (year%100!=0))||(year%400==0));
}
 function findDaysInGivenMonth(year,month){
    if(month<1|| month>12){
        console.log(`invalid monthof value ${month}`)
        return;
    }
      if(month==2){
        if(checkLeapyear(year)){
            console.log(`the month has 29 days`)
        }
    else{
        console.log(`the month 28 days`)
    }
}    
  else if( month==4||month==6||month==9||month==11){
     console.log(`The month has 30 days`)
    }
    else{
        console.log(` the month has 31 days`)
    }
 }
 findDaysInGivenMonth(2000,2)
 findDaysInGivenMonth(2013,2)
 findDaysInGivenMonth(2012,4)
 findDaysInGivenMonth(2013,10)