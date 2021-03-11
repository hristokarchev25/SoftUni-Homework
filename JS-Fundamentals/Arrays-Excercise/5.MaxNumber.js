function solve(array) {
    let output = "";
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        let isBigger = true;

        for (let i = index + 1; i <= array.length; i++) {
            let nextElement = array[i];
            if (element <= nextElement) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            output += `${element} `;
        }
    }
    console.log(output);
}
solve([41, 41, 34, 20]);