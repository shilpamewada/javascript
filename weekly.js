// get the sum of  prime number 1 to 100;
function isPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2; i<=num/2; i++){
        if(num%i===0){
            return false;
        }   
    }
    return true;
}
function sumOfRangePrimeNumber(start, end){
    let sum=0;
    for(let i=start;  i<=end;  i++){
        if(isPrime(i)){
            sum+=i;
        }
    }
    return sum;
}
console.log(sumOfRangePrimeNumber(1,100));


// calculate the sun of digit of a positive number
//  input;- 345 output;- 12
function sumOfDigit(number){
    if(number<0){
        return "plz enter positive integer";
    }
    let sum=0;
    while(number>0){
        sum+=number%10;
        number=Math.floor(number/10);
    }
    return sum;
}
console.log(sumOfDigit(123));


// count the number of vowels in a string
//  hello output :- 2

function vowelsCount(str){
    let count=0;
    for(let i=0; i<=str.length; i++){
        if('aeiouAEIOU'.includes(str[i])){
        count++;
        }
    }
    return count;
}
console.log(vowelsCount("hello"));

// total counting of string
function totalCount(str){
    const total= str.length;
    return total;
}
console.log(totalCount("hello"));

// count consonant
function countConsonant(str){
    let count=0;
    for(let i=0; i<=str.length; i++){
        if('bcdfghjklmnpqrstvwxyzABCDFGHJKLMNPQRSTVWXYZ'.includes(str[i])){
            count++;

        }
    }
    return count;
}
console.log(countConsonant("Shilparana"));

// sum of all the even array numbers 


function sumEven(arr){
    let sum=0;
    for(let i=0; i<=arr.length;i++){
    if(arr[i]%2==0){
        sum+=arr[i];
    }
    }
    return sum;
}
let arr=[2,4,5,6,7];
console.log(sumEven(arr));


