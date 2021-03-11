function solve(stringInJson) {
    let info = JSON.parse(stringInJson);
    for (let information in info) {
        console.log(`${information}: ${info[information]}`);
    }
}
solve('{"name": "George","age": 40,"town": "Sofia"}');