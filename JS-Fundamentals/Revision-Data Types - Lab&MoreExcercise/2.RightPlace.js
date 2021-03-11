function solve(firstWord, char, secondWord) {
    let replaced = firstWord.replace(`_`, char);
    if (replaced == secondWord) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}
solve(`Str_ng`, `o`, `Strong`);

///function name (firstWord,char,secondWord) {
  ///  let rep = firstWord.replace(`_`,char);
   // let output = rep === secondWord ? `Matched` : `Not Matched`;
   //// console.log(output);

///}
///name (`Str_ng`,`i`,`Strong`);
//function name (firstWord,char,secondWord) {
    //let rep = "";
   // for (let i=0;i<firstWord.lenght;i++) {
     //   if (firstWord[i] == `_`) {
       //     rep += char;
      //  } else {
       //     rep += firstWord[i];
       // }
   // }
   // if (rep == secondWord) {
     ///   console.log(`Matched`);
    //} else {
     ///   console.log(`Not Matched`);

  //  }
///}
//name (`Str_ng`,`i`,`Strong`);