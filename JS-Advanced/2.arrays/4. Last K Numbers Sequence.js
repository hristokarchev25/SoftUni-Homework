function name(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        lastElement = result.slice(-k);
        let sum = lastElement.reduce((a,x)=> a+x,0);
        result.push(sum);
    }
    console.log(result.join(" "));
}
name(6, 3);