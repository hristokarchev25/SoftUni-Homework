function name(array) {
    let rotations = Number(array.pop())
    for (let i = 0; i < rotations % array.length; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }
    console.log(array.join(" "));
}
name(['1',
    '2',
    '3',
    '4',
    '2']
);
name(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);