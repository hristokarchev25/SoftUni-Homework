//let pattern = new RegExp('[A-Z][a-z]+','g');
let literal = /(?<firstLetter>[A-Z])[a-z]+/g;

let text  = "Lorem Ipsin is simply at dummy text Ivaylo";
let result = text.split(/[a-z]{2} /g);
console.log(result);

//let result = text.replace(literal,'Ico');
//console.log(result);

//let reuslt = text.matchAll(literal);
//for (const res of reuslt) {
  //  console.log(res);
    
//}

//console.log(reuslt);
///reuslt = literal.exec(text);
///console.log(reuslt);
//while(reuslt){
//console.log(reuslt[1]);
  //  reuslt = literal.exec(text);
//}
