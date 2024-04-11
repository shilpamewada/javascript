// print numbers 1 to 5
function printNumbers(){
    for(let i=1; i<=5;i++){
        console.log(i);
    }
}
printNumbers()
// even numbers
function evenNumbers(){
    for(let i=2; i<=10; i+=2){
        console.log(i);
        
    }
}
evenNumbers()

// // second
function evenNum(){
    for(let i=2; i<=30;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
evenNum()


// third
function evenNum(givennum){
    if(givennum>30){
    for(let i=givennum; i<=30;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
else{
    console.log(`this is not valid numbers`)
}
    }

evenNum(10)


// calculate the sum of numbers from 1 to 5

function sumOfElement(num){
    let sum =0
    for(let i = 0; i<num.length; i++){
        sum = sum+num[i]
    }
    return sum;
}
let num=[1,2,3,4,5];
console.log(sumOfElement(num));

// 2method

function sumOfGivenNumbers(){
    let sum=0;
    for (let i = 1; i <= 10 ; i++){
        sum = sum + i
    }
    return sum;
}
console.log(sumOfGivenNumbers());
// 3r method
function print1to5(){
    let numbers = 0;
    for (let i= 1; i <= 5; i++){
        numbers = numbers + i 
    }
    return numbers;
}
let result = print1to5()
console.log(result);

// // decrement method
function print5to1(){
    let numbers = 0;
    for (let i= 5; i >= 1; i--){
        numbers = numbers + i 
        
    }
    return numbers;
}
let output = print5to1()
console.log(output);

// factorial of a number
function factorialNum(n){
    let num = 1;
    if(n==0){
    return 1;
    }
    for( let i = 1; i <= n; i++){
      num = num*i
    }
    return num;
}
console.log(factorialNum(5));
// user given
function factnu(usergiven){
    let fact=1;
    for(let i= usergiven; i>=1; i--){
        fact=fact*i;
        // fact*=i;
    }
    return fact;
}
let resultoffactorial=factnu(6)
console.log(resultoffactorial);


// write a code the input is "hello world" output "dlrow olleh"

function stringName(){
    let input= "Shilpa Rana";
    let stringName=" ";
    for(let i= input.length -1; i >= 0; i--){
        stringName = stringName + input[i];
    }
console.log(stringName);

}
stringName() 
// second method of string reverse
// without hardcode
function reverseString(word) {
    let reversedword="";
    for(let i = word.length -1; i>= 0;i--){
        reversedword = reversedword + word[i]
    }
return reversedword;
}
 let reversedword=reverseString("javascript");
 console.log(reversedword)
// let name="javascript";
// console.log(name.length)

// check whether the given number is palindrome or not
//  function palindromeWord(givenword){
//     let reversedword=reverseString(givenword);
//     if (givenword==reversedword){
//         return "palindrome"
//     }
//     else{
//         return "not palindrome"
//     }

//  }
//  let resultofpalindrome= palindromeWord("mom");
//  console.log(resultofpalindrome);

// let var const datatypes variables function declaration calling parmeter
 // print stars
function starPrint(){
    let row=" ";
    for( let i=1; i<=5; i++){
       row=row+"* ";
    }
    return row;
}
 let starPrintresult=starPrint();
 console.log(starPrintresult);

//  square pattern j column i rows
function squarePattern(){
    let allrows="";
    for(let j=1; j<=5; j++){
        let singlerow=" ";
        for( let i=1; i<=5; i++){
            singlerow=singlerow+"* "
        }
        allrows+=singlerow  +"\n";
    }
    return allrows;
}
let squarePatternresult =squarePattern();
console.log(squarePatternresult);
//  printt a simple pattern
function simplePattern(){
    let row="";
    for(let i=1; i<=5; i++){
        for( let j=1; j<=i; j++){
            row+="* ";
        }
         row+="\n"
    }
    return row;
}
let simplePatternresult= simplePattern();
console.log(simplePatternresult);

// reverse pythontutor.com
function simplePatternr(){
    let row="";
    for (let i = 1; i <= 5; i++) {
        for (let j = i; j <= 5; j++) {
            row+="* ";
        }
         row+="\n"
    }
    return row;
}
let simplePatternresultp= simplePatternr();
console.log(simplePatternresultp);


// print a pyramid

function pyramidPattern(){
    let allrow="";
    for( let i=1; i<=5; i++){
        let row=" ";
        for( let j=1; j<=5-i;  j++){
            row+=" "
    
        }
        for( let k=1; k<=i; k++){
            row+="* "
    
        }
        allrow+=row+"\n"
    }
    return allrow;
}
let pyramidPatternResult=pyramidPattern();
console.log(pyramidPatternResult);

// second method of pyramid
function  simplePyramid(){
    let allrows=" ";
    for( let i=0; i<=5; i++){
        allrows+= " ".repeat(5-i)+ " * ".repeat(i)+"\n"
    }
return allrows;
}
console.log(simplePyramid());

// print diamond pattern
function diamonddPattern(){
    let allrows=" ";
    for (let i = 1; i <= 5; i++) { 
        allrows+= " ".repeat(5-i)+ " *".repeat(i)+"\n"
    } 
    for (let i = 5- 1; i >= 1; i--) { 
        allrows+=" ".repeat(5- i) + " *".repeat(i)+ "\n"
    }
    return allrows;
}
 console.log(diamonddPattern());