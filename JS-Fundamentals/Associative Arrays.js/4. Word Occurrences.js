function solve(input) {
    let words = new Map();
    for (let element of input) {
        if (!words.has(element)) {
            words.set(element, 0)
        }
        words.set(element, words.get(element) + 1);
    }
    let wordsEntries = Array.from(words.entries());
    let sorted = wordsEntries.sort((a, b) => {
        let diff = b[1] - a[1];
        if (diff === 0) {
            return a[0].localeCompare(b[0]);
        } else {
            return diff;
        }
    });
    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);



//function solve(input) {
    //let obj = {};
    //for (let el of input) {
        //if (obj[el]) {
            //obj[el]++;
       // } else {
         //   obj[el] = 1;
        //}
   // }
    //let wordsEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    //for (const kvp of wordsEntries) {
        //console.log(`${kvp[0]} -> ${kvp[1]} times`);
    //}
//}
//solve();