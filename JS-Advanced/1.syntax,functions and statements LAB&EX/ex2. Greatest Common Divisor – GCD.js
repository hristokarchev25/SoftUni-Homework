function name(first, second) {
    let lower = Math.min(first, second);
    let bigger = Math.max(first, second);
    let output = 0;
    for (let i = lower; i >= 0; i--) {
        if (bigger % i == 0 && lower % i == 0) {
            output = i;
            break;
        }
    }
    console.log(output);
}
name(15, 5);
name(2154, 458);