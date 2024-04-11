// map() creates a new array from calling a function for every array element.
// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The reduce() method returns a single value: the function's accumulated result.


// array method
let arr= [  1,2,3,4]
arr.push(4); //add element in last 
console.log(arr);
arr.pop() ; // removing last element
console.log(arr);
arr.unshift(8); //add element in the beginning
console.log(arr)
arr.shift(); //add element in the beginning
console.log(arr);// shift remove element in the beginning


// accessing element
let arr2= [10,60,70,89, 79, 89];
console.log(arr2.indexOf(89));//if element is not present in aar so it will return -1
console.log(arr2.lastIndexOf(89));

// slicing and splicing
// console.log(aar2.slice(0,3));
//  start and end index give

// splice (start deleteCount Item1 item2)

//  console.log(arr2.splice(1,4)); // manipulate the array

//  iterating
let names=["python", "java", "c"]
names.forEach((each)=>{
    console.log(each);
})
// names.map((each)=>{return each})
let squares=arr.map((element)=>element*element)
console.log(squares);


// reduce
 let array=[1,2,3,4,5]
 let sum=array.reduce((a,b)=> a+b)
 console.log(sum);


 let numbers=[10,20,30,40]
 numbers.filter((element)=>{element%2==0})
  let result=numbers.map((each)=> {return each*3})
  console.log(result);

  let nums=[1,9,8,5,4,6]
  let weeks=["mon","tues","wed","thu"]