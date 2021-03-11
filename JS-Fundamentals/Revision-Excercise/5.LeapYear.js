function solve (year) {
    let one = (year % 4 == 0) && (year % 100 !== 0);
    let two = (year % 400 == 0);
    if (one || two) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
solve (2003);