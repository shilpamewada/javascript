
// intial
// while(condition){
    // statement
    // increment decrement or division
// }
// wap to print 1 to 5
let a=1;
while(a<=5){
    console.log(a);
    a++;

}

// wap to find the sum of digits in given numbrer 808
 let sum=0;
 let i=0;
 while(i<=15){ 
    sum+=i;
    i++;
 }
 console.log("The sum is " + sum);
// {%last value }(divide/) is aceess all value except last)
// second
function sumOfDigit(num){
    let sum = 0;
    while(num > 0){
    sum= sum +(num % 10)  ;  //sum=(sum*10)+(num%10)
    // %is to acces last element
    num=Math.floor(num/10);
    //  /divide remove last element
    }
    return sum;
}
let reversednum= sumOfDigit(8185)
console.log(reversednum);
// // reverse digit
function reverseOfDigit(num){
    let reverse=0;
    while(num>0){
        const r = num % 10;   //3
        reverse = reverse * 10 + r;  //3
        num= Math.floor(num / 10);

    }
    return reverse;
}
 console.log(reverseOfDigit(123));

// thrd
// function revDigit(num){
//     let rev=0;
//     while(num>0){
//         rev=(rev*10)+(num%10);
//         num=Math.floor(num/10);
//     }
//     return rev;
// }
// console.log(revDigit(1234));
// the given number is palindrome or not
function revDigit(num){
    let rev=0;
    let orgNum = num;
    while(num > 0){
        rev=(rev * 10)+(num % 10);

        num=Math.floor(num/10);
    }
    return orgNum === rev;
}
console.log(revDigit(121));
console.log(revDigit(345));
// wap to find the number of digitd in a given number
// input-- 1578
// output---4 

function countDigit(num){
    let count=0;
    let n=num;
    while(n>0){    
     n=Math.floor(n/10);
      count++;
    }
    return count;
    
}
console.log(countDigit(89));



