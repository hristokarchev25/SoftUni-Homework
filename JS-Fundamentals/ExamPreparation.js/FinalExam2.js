function solve(input) {
    let arrayOfMatches = [];
    let sum = 0;
    let matches = Array.from(input.matchAll(/(\=|\/)(?<word>[A-Z][a-zA-Z]{2,})(\1)/g));
    for (let match of matches) {
        arrayOfMatches.push(match.groups.word);
    }

    for (let elements of arrayOfMatches) {
        sum += elements.length;
    }

    console.log(`Destinations: ${arrayOfMatches.join(", ")}`);
    console.log(`Travel Points: ${sum}`);
}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');