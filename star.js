// simple star pint in a rows
function starPrint(){
    let row=" ";
    for( let i=1; i<=5; i++){
       row=row+"* ";
    }
    return row;
}
 let starPrintresult=starPrint();
 console.log(starPrintresult);

//  square pattern in a row
function squarePattern(){
    let allrows="";
    for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        allrows+="*";
    }
    allrows+="\n"
}
return allrows;
}
console.log(squarePattern());

// right angle
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

// reverse right angle
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
// right sided triangle

function rightSideTriangle(){
    let row="";
    for(let i=1; i<=5; i++){
        for(let j=i; j<=5; j++){
        for( let j=1; j<=i; j++){
            row+="*";
        }
    }
        row+="\n"
    }
    return row;
}
console.log(rightSideTriangle());




