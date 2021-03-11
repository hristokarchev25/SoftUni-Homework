function solve(input) {
    input.forEach(line => {
        const tokens = line.split(" | ");
        const town = {
            town: tokens[0],
            latitude: Number(tokens[1]).toFixed(2),
            longitude: Number(tokens[2]).toFixed(2)
        }
        console.log(town);
    });
}
solve(['Sofia | 42.6965 | 23.32601']);