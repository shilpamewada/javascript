// for loop to iterate through each word in the  sentence and constructs a reversed sentence by appending words in  reverse order
 function reverseSentence(sentence){
    let words=sentence.split(" ");
    let reverseword=[];
    for( let i=words.length-1; i>=0; i--){
        reverseword.push(words[i]);
    }
    let reverseSentence=reverseword.join(" ");
    return reverseSentence;
 }
 console.log(reverseSentence("hello world")
 );

//  for loop to iterate through the array and keeps tracks of the maximum element so far

function maxElement(arr){
    let max=arr[0];
    for(let i=1; i<=arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(maxElement([6,78,9]));


// handshakes
function calculateHandShakes(n){
    if(n<2){
        return false;
    }
    return (n*(n-1))/2;   
}
console.log(calculateHandShakes(5));
