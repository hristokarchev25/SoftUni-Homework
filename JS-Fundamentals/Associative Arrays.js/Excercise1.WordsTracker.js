function solution(input) {
    let obj = {};
    let searchedWords = input[0].split(" ");
    searchedWords.forEach(word => {
        obj[word] = 0;
    });
    for (let elements of input.slice(1)) {
        if (Object.keys(obj).includes(elements)) {
            obj[elements]++;
        }
    }
    for (let key of Object.keys(obj).sort((a,b)=>obj[b]-obj[a])) {
        console.log(`${key} - ${obj[key]}`);
    }
}
solution([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);