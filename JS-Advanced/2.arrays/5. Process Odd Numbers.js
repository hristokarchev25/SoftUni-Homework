function name(array) {
    let result = array.filter((el, index) => index % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(" ");
    console.log(result);
}
name([10, 15, 20, 25]);