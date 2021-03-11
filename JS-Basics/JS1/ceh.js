 function ceh (input)
 {
let broi = Number(input.shift());
let dul = Number(input.shift());
let shi = Number(input.shift());
    let pokrivki =( broi * (dul+2 * 0.30)*(shi+2 * 0.30));
    let kareta = (broi * (dul/2)*(dul/2));
        let usd = (pokrivki*7+kareta*9);
        let bgn = (usd*1.85);
console.log(`${usd.toFixed(2)} USD`);
console.log(`${bgn.toFixed(2)} BGN`);     
 }
 ceh([10,1.20,0.65])