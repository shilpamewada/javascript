// in function we have two fun dec and calling
// fun dec
function Greeting(){
    let wish ="Good Evening"
   console.log("hello")
    return wish;
    
}
// fun calling
console.log(Greeting());

//wap to give the person details

function persondetails(){
    let name ="shilpa"
    // console.log("my name is shilpa")
   let age=23
    // console.log("my age is"+ 23)
    let batch=63
    // console.log( "my batch number is"+63)
//     return ("my name is " + name +  "my batch is  " +batch+  "  my age is  "  +age);

// }
return `My name is ${name} . my age is ${age} . my batch Number is ${batch}`
}
 console.log(persondetails());
 