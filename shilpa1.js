// function printChar(limit){
//     let char=65;
//     let row= " "
//     for(let i=1; i<=limit; i++){
//         let store=char+i-1
//         for(let j=1; j<=i;j++){
//             row+=String.fromCharCode(store)+""
//         }
//         row+="\n"
//     }
//     return row;
// }
// console.log(printChar(5))
  
// function nGcd(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp
//     }
//     return a
// }
// console.log(nGcd(15,9))


// function even(){
//     let row= " "
//     for(let i=2; i<=10; i+=2){
//         row+=i+" "
//     }
//     return row;
// }
// console.log(even())


// function calculateSum(){
//     let sum=0;
//     for(let i=1; i<=5; i++){
//         sum+=i
//     }
//     return sum
// }
// console.log(calculateSum())


// function factNum(n){
//     let num=1;
//     if(n==0){
//         return 1;
//     }
//     for(let i=1; i<=n;i++){
//     num=num*i
//     }
//     return num
// }
// console.log(factNum(5))


// function reverse(word){
//     let reversedword= " "
//     for(let i=word.length-1; i>=0; i--){
//         reversedword+=word[i];
//     }
//     return reversedword ;
// }
// console.log(reverse("hello world"))


// function reverseString(word) {
//     let reversedword="";
//     for(let i = word.length -1; i>= 0;i--){
//         reversedword = reversedword + word[i]
//     }
// return reversedword;
// }
//  function palindromeWord(givenword){
//     let reversedword=reverseString(givenword);
//     if (givenword==reversedword){
//         return "palindrome"
//     }
//     else{
//         return "not palindrome"
//     }

//  }
//  console.log(palindromeWord("mom"))
//  console.log(palindromeWord("shilpa"))


// function starprint(limit){
//     let row= ""
//     for(let i=1; i<=limit; i++){
//         for(let j=i; j<=5; j++){
//             row+="*"
//         }
//         row+="\n"
//     }
//     return row;
// }
// console.log(starprint(5))

// function sumofnumber(num){
//     num=Math.abs(num)
//     let sum=0;
//     for(let digit of num.toString()){
//         sum+=+digit
//     }
//     return sum;
// }
// console.log(sumofnumber(879))

// function productOfNumber(num){
//         num=Math.abs(num)
//         let product=1;
//         for(let digit of num.toString()){
//             product*=digit;
//         }
//         return product;
//     }
//     console.log(productOfNumber(1234))


// function pyramidStar(range)
// {
//     let allrow=""
//     for(let i=1; i<=range; i++){
//         let row=" "
//         for(let j=1; j<=5-i; j++){
//             row+=" "
//         }
//         for(let k=1; k<=i; k++){
//             row+="* "
//         }
//         allrow+=row+"\n"
//     }
//     return allrow;
// }
// console.log(pyramidStar(5))



// function pyStar(range){
//     let row=""
//     for(let i=1; i<=range;i++){
//         row+=" ".repeat(5-i)+"* ".repeat(i)+"\n"
//     }
//     for (let i = 4; i >= 1; i--) { 
//         row+=" ".repeat(5- i) + "* ".repeat(i)+ "\n"
//     }
    
//     return row;
// }
// console.log(pyStar(5))


// function maxElement(arr){
//     let max=arr[0];
//     for(let i=1; i<=arr.length; i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
        
//     }
//     return max;
//     }
// console.log(maxElement([78,6,9]))

// function minElement(arr){
//     let min=arr[0];
//     for(let i=1; i<=arr.length; i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//       }
//     return min;
//     }
// console.log(minElement([6,7,9]))


// function decimalToBinaryNumber(decimalNumber) {
//     let binaryResult = "";
//     while (decimalNumber > 0) {
//         let rem = decimalNumber % 2;
//         binaryResult+=rem;
//         decimalNumber = Math.floor(decimalNumber / 2);
//     }
//     return binaryResult;
// }
// console.log(decimalToBinaryNumber(15));


// while loop 


// Write a JS code to find the no of digits in a number

// function digitCount(num){
//     let count=0;
//     while(num!==0){
//         num=Math.floor(num/10);
//         count++;
//     }
//     return count
// }
// console.log(digitCount(1230))


// Write a JS code to calculate the sum of digits in a number

// function sumOfDigit(num){
//     let sum=0;
//     while(num!=0){
//         num=Math.floor(num/10);
//         sum+=num%10;
//     }
//     return sum;
// }
// console.log(sumOfDigit(120))


// function generateFibonacciSeries(N) {
//     let fibo= [];
//     let a = 0, b = 1, nextTerm;

//     while (N > 0) {
//         fibo.push(a);
//         nextTerm = a + b;
//         a = b;
//         b = nextTerm;
//         N--;
//     }

//     return fibo;
// }
// console.log(generateFibonacciSeries(5))


// function generateFibonacciSeries(N) {
//     let fibo = [0, 1];

//     for (let i = 2; i < N; i++) {
//         let nextTerm = fibo[i - 1] + fibo[i - 2];
//         fibo.push(nextTerm);
//     }

//     return fibo;
// }

// console.log(generateFibonacciSeries(6));


// function countVowels(input) {
//     let count = 0;
//     let i = 0;

//     while (i < input.length) {
//         let Char = input[i].toLowerCase();

//         if (['a', 'e', 'i', 'o', 'u'].includes(Char)) {
//             count++;
//         }

//         i++;
//     }

//     return count;
// }



// function countVowels(word) {
//     let count = 0;
//     let i = 0;
//     const vowels = "aeiouAEIOU";

//     while (i < word.length) {
//         if (vowels.includes(word[i])) {
//             count++;
//         }
//         i++;
//     }

//     return count;
// }
// console.log(countVowels("hello"))



// while loop 
// function reverseWord(word){
//   let i = word.length;
//   let reverse=""
//   while (i--) {
//     reverse+=word[i]
   
//   } 
//   return reverse
// }
// console.log(reverseWord("hello"))



// function armstrongNumber(number){
//     let numstr=number.toString()
//         let length=numstr.length
//         let sum=0
//         for(let i=0; i<length; i++){
//             let digit=parseInt(numstr[i],10)
//             sum+=Math.pow(digit,length)
//         }
//      return sum===number
//     }
//     console.log(armstrongNumber(153))



// function sumOfDigit(number){
//     number=Math.abs(number)
//     let product=1;
//     for(let digit of number.toString()){
//         product*=(digit)
//     }
//     return product
// }
// console.log(sumOfDigit(1234))

// sum of prime numbers

function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0){
            return false;
        }
      
    }
    return true;
}
function sumOfPrime(num){
    let sum=0;
    for(let i=2; i<=num; i++){
        if(isPrime(i)){
            sum+=i
        }
    }
    return sum
}
console .log(sumOfPrime(100))


// digit sum of number

 function sumOfDigit(number){
    let sum=0;
    for(let digit of number.toString()){
        sum+=+(digit)
    }
    return sum
 }
console.log(sumOfDigit(1234))


// count vowels
 function countVowels(str){
    let vowels = 'aeiouAEIOU';
    count=0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count
 }
 console.log(countVowels("hello"))


//  sum of even numbers

 function sumOfEeven(numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2===0){
            sum+=numbers[i];
        }
    }
    return sum
 }
 console.log(sumOfEeven([1,2,3,4,5,6,7,8,9,10]))



//  handshakes 

 function handshakes(n){
    if(n<2){
        return false;
    }
    return (n*(n-1)/2);
 }
 console.log(handshakes(5))



//  half pyramid using alphabet


function halfPyramid(limit){
    let char =65;
    let row= ""
    for(let i=1; i<=limit; i++){
        let store =char+i-1
        for(let j=1; j<=i; j++){
            row+=String.fromCharCode(store)+" "
        }
        row+="\n"
    }
    return row;
    
}
console.log(halfPyramid(5))


// if you have an array [1,2,3,4,5] and rotate it by  one position  the resulting array  should be  [5,4,3,2,1]
function rotateArrayOne(arr){
    if(arr.length<=1){
        return arr;
    }
    const lastElement =arr.pop()
    arr.unshift(lastElement)
    return arr;

}
console.log(rotateArrayOne([1,2,3,4,5]))


// reverse sentence

function reverseSentence(sentence){
    let words=sentence.split(" ")
    let reversedWord=[]
    for(let i=words.length-1; i>=0; i--){
        reversedWord.push(words[i])
    }
    let reverseSentence=reversedWord.join(" ")
    return reverseSentence;
}
console.log(reverseSentence("hello world"))



// numbers 


function generateNumberPattern(n){
    let row =""
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            row+=j+""
        }
        row+="\n"
    }
    return row
}
console.log(generateNumberPattern(5))
   

// find longest string in array

function longestString(arr){
    let longest=arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i].length>longest.length){
            longest=arr[i]
        }
    }
    return longest

}
console.log(longestString(["shilpa", "priyanka"]))

// maximum number


function maxNumber(arr){
    let max=arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
console.log(maxNumber([1,2,3,4,5,6,7,8,9]))
