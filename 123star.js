function numberPrint(){
let row= " ";
for(let i=1; i<=4; i++){
    for(let j=1; j<=i; j++){
        row+=i+" ";
 }
    row+="\n" ;   
    
}
return row;
}
console.log(numberPrint());

// // // half pyramid
function numberPrints(){
    let row= " ";
    for(let i=1; i<=4; i++){
        for(let j=1; j<=i; j++){
            row+=j+" ";
     }
        row+="\n" ;    
    }
    return row;
    }
    console.log(numberPrints());
      
// //        // function print pattern    //
       function printPattern(limit) {
        const char = 65;
        let row= "";
        for (let i = 1; i <= limit; i++) {
            let store = char + i - 1;
            for (let j = 1; j <= i; j++) {
                row+= String.fromCharCode(store) + " ";
            }
            row +="\n";
        }
        return row;
    } 
    console.log(printPattern(5));
    
//     // 12345
//     // 12345 repeat 4 times

    function numPrintss(limit){
        let row= "";
        for(let i=1; i<=limit;i++){
            for(let j=1; j<=5; j++){
                row+=j;
            }
            row+="\n"
        }
        return row;
    }
    console.log(numPrintss(4));

    // 11111
    // 22222 repeat 5 times
    function nummPrint(limit){
        let row= "";
        for(let i=1; i<=limit;i++){
            for(let j=1; j<=5; j++){
                row+=i;
            }
            row+="\n"
        }
        return row;
    }
//     console.log(nummPrint(5));
// // ******
// // ****** repeat 5 times
    function numPrints(limit){
        let rows= "";
        for(let i=1; i<=limit;i++){
            for(let j=1; j<=5; j++){
                rows+="*";
            }
            rows+="\n"
        }
        return rows;
    }
    console.log(numPrints(5));

//     // *
//     // **
    function nnumPrints(limit){
        let rows= "";
        for(let i=1; i<=limit;i++){
            for(let j=1; j<=i; j++){
                rows+="*";
            }
            rows+="\n"
        }
        return rows;
    }
    console.log(nnumPrints(10));

    // Character print like ABCDE
    function printChar(limit){
        let char=65;
        let row= "";
        for(let i=1;i<=limit;i++){
            let store=char;
            for(let j=1; j<=5; j++){
                row+=String.fromCharCode(store)+" "
            }
            row+="\n";
        }
        return row;      
    }
    console.log(printChar(5));

// a
// abc
    function printChars(limit){
        let char=65;
        let row= "";
        for(let i=1;i<=limit;i++){
            let store=char;
            for(let j=1; j<=i; j++){
                row+=String.fromCharCode(store)+" "
                store++;
            }
            row+="\n";
        }
        return row;      
    }
    console.log(printChars(5));

    //greatest common divisor gcd
    function gcdFind(a,b){
        while(b!==0){
            let temp=b;
            b=a%b;
            a=temp;
        }
        return a;
    }
console.log(gcdFind(15,9));