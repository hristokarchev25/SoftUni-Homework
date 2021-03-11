function solve (input)
{
    let firstgame = input.shift();
    let secondgame = input.shift();
    let thirdgame = input.shift();

    let wins = 0;
    let loss = 0;
    let drown = 0;
    
    let result1 = firstgame.charAt(0);
    let Result1 = firstgame.charAt(2);
    let result2 = secondgame.charAt(0);
    let Result2 = secondgame.charAt(2);
    let result3 = thirdgame.charAt(0);
    let Result3 = thirdgame.charAt(2);

    if (result1>Result1){wins++}
    else if (result1<Result1) {loss++}
    else {drown++;}

    if (result2>Result2) {wins++;}
    else if (result2<Result2) {loss++;}
    else {drown++;}

    if (result3>Result3){wins++;}
    else if (result3<Result3) {loss++;}
    else {drown++;}

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loss} games.`);
    console.log(`Drawn games: ${drown} `);
    
}
solve(["3:1","0:2","0:0"])