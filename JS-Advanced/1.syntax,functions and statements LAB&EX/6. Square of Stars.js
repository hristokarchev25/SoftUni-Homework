  
function squareOfStars(arg1){
    let n = Number(arg1);
    for (let i = 0; i < n; i++) {
        console.log("* ".repeat(n));
    }
}
squareOfStars(5);