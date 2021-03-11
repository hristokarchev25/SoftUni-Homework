function solve(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNum = Number(input.shift());
    let count = 0;
    let flag = false;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count++;
            if (magicNum === i + j) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNum})`);
                flag = true;
                break;
            }
        }
        if (flag) { break; }
    }

    if (!flag) {
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }
}
solve([230, 240, 20])