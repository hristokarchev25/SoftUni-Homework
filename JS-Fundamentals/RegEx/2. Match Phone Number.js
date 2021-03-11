function solve(numbers) {
    let pattern = /\+359([\s|-])2\1[0-9]{3}\1[0-9]{4}\b/g;
    let validNumbersArray = [];
    while ((validNumbers = pattern.exec(numbers)) !== null) {
        validNumbersArray.push(validNumbers[0]);
    }
    console.log(validNumbersArray.join(", "));
}
solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");
//\+359([\s|-])2\1[0-9]{3}\1[0-9]{4}\b
//[+359]+-?[0-9]-?[0-9]{3}-?[0-9]{4}\b