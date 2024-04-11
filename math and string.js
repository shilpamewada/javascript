// math function
// built in functions in javascript
// console.log(Math.min(10,20));
// console.log(Math.max10,20,30());
let arr=[10,20,30]
console.log(Math.min(...arr));
// spread syntax (...) to spread the elements of the array
console.log("floor of 3.552 ---"+Math.floor(3.552)); // lower value give
console.log("ceil of 3.552 ---"+ Math.ceil(3.552));  //upper value give
console.log(Math.sqrt(4));
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.round(34.5));
console.log(Math.round(34.6));
let num=12.456
console.log(num.toFixed(2));


// string functions

let name= " shilpa"
console.log(name.length);

// character accessing
console.log(name[1]);
console.log(name.charAt(1));

// concatenation
let str1="shilpa";
let str2="rana"
console.log(str1 + " " + str2);
console.log(str1.concat(str2));
console.log(`${str1} ${str2}`);


// subststrring
let stra="javascript";
console.log(stra.substring(1,5));

// slice
let course ="mernstack"
console.log(course.slice(0,5));

// string conversation
let num1=43
console.log(typeof(num1));
let number=num1.toString();
confirm.log(typeof(number));

// replace the word
let str = "Hello World";
console.log(str.replace("World", "Universe"));


