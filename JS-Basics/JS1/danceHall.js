function zala (input)
{
let l =  Number(input.shift());
let w = Number(input.shift());
let a = Number(input.shift());
        let zala = (l*100)*(w*100);
        let garderob = (a*100) *(a*100);
        let peika = zala/10;
        let free = zala-garderob-peika;
        let dancers = free/(40+7000);
console.log(Math.floor(dancers));
}
zala ([50,25,2]);