function name(input) {
    let list = JSON.parse(input);

    let obj = list.reduce((acc, x) => {
        return Object.assign({}, acc, x)}, {});
    return obj;
}