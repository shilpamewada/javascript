// write a program print number 1 to 10
// function printNumbers(){
//     for(let i=1; i<=10;i++){
//         console.log(i)
//     }
// }
// printNumbers()

// wap to print even numbers in given array
  

// function printEven(arr){
//     for(var  i=0; i<arr.length;i++){
//         if(arr[i]%2==0){
//             console.log(arr[i]);
//         }
//     }
// }
// var arr=[12,3,14,16,13,13,23,56,36,67]
// printEven(arr)

// write a program to delete all occurance of element in given array
// function deleteElement(arr,ele){
//     for(var i=0; i<arr.length; i++){
//         if(arr[i]==ele){
//             arr.splice(i,1); //delete element
//         }
//     }
//     return arr;
// }
// var arr=[23,56,4,78,5,63,45,210];
// arr=deleteElement(arr,56)
// console.log(arr)

// wap a js code to demonstrate Async loop
// wap to find the power of a number using for loop
// function numPow(num,pow){
//     let res=1;  //return 1 for pow=0
//     for(let i=0; i<pow; i++){
//         res=res*num;
//     }
//     return res;
// }
// console.log(numPow(4,3));
//     console.log(numPow(5,3));

    // wap a js code to print a pattern using for loop
     function printPattern(range){
        for(let i=0;i<=range;i++){
            let str=" ";
            for( let j=0;j<=i;j++){
                str+=j+" ";
            }
            console.log(str);
        }
     }
     printPattern(8)

    //  wap  a js code to find the no of digit in a number

    function digitCount(num){
        let count=0;
        while(num!=0){
            num=Math.floor(num/10);
            count++;
        }
        return count;
    }
    console.log(digitCount(23456));
    console.log(digitCount(8364));

    // wap a js code to calculate the sum of digits in a number
    function digitSum(num){
        let sum=0;
        while(num!=0){
            sum=sum+num%10;
            num=Math.floor(num/10);
        }
        return sum;
    }
    console.log(digitSum(1234));
    console.log(digitSum(3456));


    // wap to find the largest number in array
//     function largestNum(largest){
//         let largest=arr[0];  
//         for( let i=0; i<arr.length;i++){
//             largest=arr[i]>largest ? arr[i]:largest;
//         }
//     }
//     let arr = [1,2,3,4,5,6];
//     console.log(largestNum(largest));
// // 2d array
//     function printArray(arr) {
    //     for (var i=0;i<arr.length;i++){
    //       for(var j=0;j<arr[0].length;j++){
    //         console.log(arr[i][j]);
    //       }   
    //     }
    //   }
    //   var arr = [[1, 2],
    //              [3, 4],
    //              [5, 6]];
      
    //   printArray(arr)