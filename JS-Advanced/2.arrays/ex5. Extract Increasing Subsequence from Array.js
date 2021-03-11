function name(params) {
    let max = Number.MIN_SAFE_INTEGER;

    let output = params.reduce((acc,curr) => {
        if (curr > max) {
            max = curr;
            acc.push(max);
        } 
         return acc;
    },[]);
    console.log(output.join("\n"));
}
name([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
function name(input) {
    const increasingArray = [];
    input.forEach(x => {
        if (x >= Math.max(...increasingArray)) {
            increasingArray.push(x);
        }
    });
    console.log(increasingArray.join("\n"));
}