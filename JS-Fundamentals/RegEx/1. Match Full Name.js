function solve(input) {
    let pattern = /(\b[A-Z]{1}[a-z]+ [A-Z][a-z]+\b)/g;
    let validNamesArray = [];
    while((validNames = pattern.exec(input)) !== null) {
        validNamesArray.push(validNames[0]);
    }
    console.log(validNamesArray.join(' '));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");