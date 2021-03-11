function solve(input) {
    let output = '';
    let element = input.split(" ").map(x => x.toLowerCase());
    let words = generateMap(new Set(element));
    element.forEach((ele) => {
        words.set(ele, words.get(ele) + 1);
    });
    let entries = Array.from(words.entries());
    entries.forEach(kvp => {
        let [key, value] = kvp;
        if (Number(value) % 2 !== 0) {
            output += key + " ";
        }
    });
    console.log(output);
    function generateMap(set) {
        let map = new Map();
        set.forEach(element => {
            map.set(element, 0);
        });
        return map;
    }

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');