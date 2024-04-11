// print a table
function tableNum(num){
    for(let i=1; i<=10; i++){
        console.log(`${num}*${i}=${num*i}`);
    }
}
tableNum(2)
// 2 * 1 = 2

// function Greeting
 function greetingPerson(name1,name2){
    let wish = "hello" + " "+name1 +" "+name2
    return wish;
 }
 console.log(greetingPerson('shilpa','rana'));


//  sum of element array
function sumOfElement(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    return sum;
}
let arr=[1,2,3,4,5,6,7];
console.log(sumOfElement(arr));


// find a sum of even numbers
limit=10;
sum = 0;
for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        sum = sum + i;
    }
}
console.log(`The sum of even numbers is ${sum}`);
// second
function sumEvenNumbers(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            sum+=numbers[i]
        }
    }
    return sum;
}
let numbers =[1,2,3,4,5,6,7,8,9];
console.log(sumEvenNumbers(numbers));

// count the numbers of vowels in a string
function countVowels(str){
    let vowelCount=0;
    for(let i=0; i<str.length; i++){
        if(['a','i','o','u' ,'A','I','O','U'].includes(str[i])){
            vowelCount++;
        }

    }
    return vowelCount;
}
console.log(countVowels("shilpa"));

// print 1 to 5    
function printNumbers(){
    for(let i =1; i<=5; i++){
        console.log(i);
    }
}
printNumbers()

// print even numbers
function evenNumbers(){
    for( let i=2; i<=10; i++){
        if(i%2==0){
            console.log(i);
        }
    }
    return  evenNumbers;
}
evenNumbers()

// by user print even numbers
function evenNum(givennum){
    for(let i=givennum; i<=15;i++){
        if(i % 2==0){
            console.log(i);

        }
    }
}
evenNum(10)

