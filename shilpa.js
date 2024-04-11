// function printNumSeries(){
//     let row= ""
//     for(let i=1; i<=4; i++){
//         for(j=1; j<=i; j++){
//             row+=i+" "
//         }
//         row+="\n"
//     }
//     return row;
// }
// console.log(printNumSeries());

// function print(){
//     let row= ""
//     for(let i=0; i<=5;i++){
//         row+=i+""
//         row+="\n"
//     }
//     return row;
// }
// console.log(print());
  
// function printNumHalf(){
//     let row= ""
//     for(let i=1; i<=4; i++){
//         for(let j=1;j<=i;j++){
//             row+=j+""
//         }
//         row+="\n"
//     }
//     return row;
// }
// console.log(printNumHalf());

// function charPrint(limit){
//     let char=65;
//     let row= ""
//     for(let i=1; i<=limit;i++){
//         let store = char+i-1;
//         for(let j=1; j<=i; j++){
//             row+=String.fromCharCode(store)+""
//         }
//         row+="\n"
//     }
//     return row;
// }
// console.log(charPrint(4))


// function snum(range){
//     let row= ""
//     for(let i=1; i<=range;i++){
//         for(let j=1; j<=5;j++){
//             row+=j+""
//         }
//         row+="\n"
//     }
//     return row;
// }
// console.log(snum(4));

// function snum(range){
//     let row= ""
//     for(let i=1; i<=range;i++){
//         for(let j=1; j<=5;j++){
//             row+=i+""
//         }
//         row+="\n"
//     }
//     return row;
// }
// console.log(snum(4));


// function  printStar(range){
//     let row= ""
//     for(let i=1; i<=range; i++){
//         for(let j=1; j<=5; j++){
//             row+="*"+""
//         }
//         row+="\n"
//     }
//     return row;
// }


// console.log(printStar(4))
// function  printStar(range){
//     let row= ""
//     for(let i=1; i<=range; i++){
//         for(let j=1; j<=i; j++){
//             row+="*"+""
//         }
//         row+="\n"
//     }
//     return row;
// }
// console.log(printStar(4))


// function tableWrite(num){
//     for(let i=1; i<=10; i++){
//         console.log(`${num}*${i}=${num*i}`)
//     }
// }
// tableWrite(5)


// function sumOfArrayElement(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum;
// }
// let arr=[1,2,3,4]
// console.log(sumOfArrayElement(arr))


// function printEven(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             console.log(arr[i])
//         }
//     }
// }
// let arr=[1,2,3,4,5,6,7,8]
// printEven(arr)


// function calculatePower(num, pow){
//     let result=1;
//     for(let i=0; i<pow; i++){
//         result*=num
//     }
//     return result;
// }
// console.log(calculatePower(4,3))
// console.log(calculatePower(5,3))

// function countDigit(num){
//     let count=0;
//     for(let digit of num.toString()){
//         count++
//     }
//     return count;
// }
// console.log(countDigit(1234))

//  function reverseNumber(num){
//     num=num.toString()
//     let reverse=""
//     for(let i=num.length-1; i>=0; i--){
//         reverse+=num[i]
//     }
//     return reverse
//  }
//  console.log(reverseNumber(123))


// function factorialNumber(n){
//     if(n<0){
//         return "invalid"
//     }
//     let fact=1;
//     for(let i=1; i<=n; i++){
//         fact*=i
//     }
//     return fact
    
// }
// console.log(factorialNumber(5))


// Function to calculate the sum of prime numbers up to a given number
// Function to check if a given positive integer is a prime number


// function reverseSentence(sentence){
//     let words=sentence.split(" ");
//     let reverseword=[];
//     for( let i=words.length-1; i>=0; i--){
//         reverseword.push(words[i]);
//     }
//     let reverseSent=reverseword.join(" ");
//     return reverseSent;
//  }
//  console.log(reverseSentence("hello world")  );
 

// function handshakesPerson(n){
//     if(n<2){
//         return false;
//     }
//     return (n*(n-1)/2);
// }
// console.log(handshakesPerson(5));


// function  vowelsCount(str){
//     let count=0;
//     for(let i=0; i<=str.length; i++){
//         if('aeiouAEIOU'.includes(str[i])){
//             count++
//         }
//     }
//     return count
// }
// console.log(vowelsCount("Shilpa Rana"));

// function totalCountIncludingSpace(str){
//     let total=str.length;
//     return total;
// }
// console.log(totalCountIncludingSpace("shilpa rana"))

// function totalCountWithoutSpace(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(totalCountWithoutSpace("shilpa rana"));


// function countconso(str){
//     let count=0;
//     for(let i=0; i<=str.length; i++){
//         if('bcdfghjklmnpqrstvwxyzABCDFGHJKLMNPQRSTVWXYZ'.includes(str[i])){
//             count++
//         }
//     }
//     return count
// }
// console.log(countconso("shilpa rana"))


// function  printStar(range){
//         let row= ""
//         for(let i=1; i<=range; i++){
//             for(let j=1; j<=i; j++){
//                 row+="*"
//             }
//             row+="\n"
//         }
//         return row;
//     }
//     console.log(printStar(7))



// function generateFibonacciSeries(n){
//     let fibo=[0,1]
//     for(let i=2; i<=n; i++){
//         fibo[i]=fibo[i-1]+fibo[i-2]
//     }
//     return fibo
// }
// console.log(generateFibonacciSeries(5))  