function solve(input) {
    let numbers = input.shift();
    let numbersSplited = numbers.split(" ");
    let command = input.shift();
    while (command !== "end") {
        let splitedCommand = command.split(" ");
        let toDo = splitedCommand[0];
        let indexOne = Number(splitedCommand[1]);
        let indexTwo = Number(splitedCommand[2]);

        switch (toDo) {
            case "swap":
                swap(numbersSplited, indexOne, indexTwo);
                break;
            case "multiply":
                numbersSplited[indexOne] *= numbersSplited[indexTwo];
                break;
            case "decrease":
                numbersSplited = numbersSplited.map(x => x - 1);
                break;
        }

        command = input.shift();
    }

    function swap(input, indexA, indexB) {
        let temp = input[indexA];

        input[indexA] = input[indexB];
        input[indexB] = temp;
    }
    console.log(numbersSplited.join(", "));
}
solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);