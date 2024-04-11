// 1.Create a function that returns the number of hashes and pluses in a string.?
       function printHashPlus(str){
         let ashcount=0; let pluscount=0; let arr=[ashcount,pluscount];
           for(let i = 0;i < str.length;i++){
              if(str[i]==="#")
                   ashcount++; 
                   if(str[i]==="+")
                   pluscount++; 
           }
           return [ashcount,pluscount];
       }
 console.log(printHashPlus("###+"));

 
// calculate the sum of all integers from 1 to a given positive number n.?
        function sum(n){
         let sum=0;
             for(let i= 1;i <= n;i++){
                sum+=i;
             }
             return sum;
        }
 console.log(sum(5));

// find the factorial of a given positive integer n.?
       function factorial(n){
         let fact=1;
         for(let i=n;i>=1;i--){
            fact*=i;
         }
         return fact;
       }
     console.log(factorial(0))

//  print a pattern of asterisks in the shape of a right-angled triangle.?

function patterns(n){
   let row="";
    for(let i=1;i<=n;i++){
      for(let j=1;j<=i;j++){
         row+='* '
      }
      row+="\n";
    }
   return row;
}
console.log(patterns(5))
// / // In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// // Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// // Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

// // Examples
// // console.log(amplify(4)) ➞ [1, 2, 3, 40]
// // // Create a sequence from 1 to 4
// // // 4 is exactly divisible by 4, so it will be 4*10 = 40

// // console.log(amplify(3)) ➞ [1, 2, 3]
// // // Create a sequence from 1 to 3
// // // There are no numbers that can be exactly divided by 4

// // console.log(amplify(25)) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// // // Create a sequence from 1 to 25
// // // The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.


// // Notes

// // The given parameter num will always be equal to or greater than 1.
// // Remember to include the num as the higher bound of the sequence (see the Examples) above.
// // A number a amplified by a factor b can also be read as: a * b.
// // A number a is exactly divisible by a number b when the remainder of the division a / b is equal to 0.
// // If you get stuck on a challenge, find help in the Resources tab.
// // If you're really stuck, unlock solutions in the Solutions tab.

//      function amplify(n){
//       let arr=[];
//            for(let i=1;i<=n;i++){
//               if(i%4===0){
//                  arr.push(i*10);
//               }
//               else{
//                    arr.push(i);
//               }
//            }
//            return arr;
//      }
// console.log(amplify(25));


// factorial of non negative ineger
function calculateFactorial(n) {
   // Check if n is a non-negative integer
   if (n < 0 ) {
       return " a non-negative integer.";
   }

   // If n is 0, the factorial is 1
   if (n === 0) {
       return 1;
   }

   // Initialize result to 1
   let result = 1;

   // Use a while loop to calculate the factorial
   while (n > 1) {
       result *= n;
       n--;
   }

   return result;
}

console.log(calculateFactorial(5));
console.log(calculateFactorial(0));


//  reverse number
function revDigit(num){
       let rev=0;
       while(num>0){
           rev=(rev*10)+(num%10);
           num=Math.floor(num/10);
       }
       return rev;
   }
   console.log(revDigit(123));


   // powe base question
   function calculatePower(base, exponent) {
    // Initialize result to 1
      let result = 1;
  // Calculate power using a while loop
      while (exponent > 0) {
          result *= base;
          exponent--;
      }
  
      return result;
  }
  console.log(calculatePower(2, 3));
  




