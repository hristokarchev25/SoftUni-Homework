function solve(array) {
    let k = array.shift();
    let firstPair = array.slice(0, k);
    let secondPair = array.slice(array.length - k);
    let firstResult = firstPair.join(" ");
    let secondResult = secondPair.join(" ");
    console.log(firstResult);
    console.log(secondResult);
    //let firstArr = '';
    //let secondArr = '';
    //for (let i = 0; i < k; i++) {
     //   firstArr += ` ${firstPair[i]}`;
      //  secondArr += ` ${secondPair[i]}`;
   // }
    //console.log(firstArr);
    //console.log(secondArr);
}
solve([2, 7, 8, 9]);