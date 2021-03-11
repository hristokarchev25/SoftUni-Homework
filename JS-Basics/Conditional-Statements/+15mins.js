function minutes (input)
{
let hours = Number(input.shift());
let mins = Number(input.shift());


let finalh = hours ;
let finalm = mins%(24*60)+15;

if (mins < 10) {
   console.log(`${finalh}:0${finalm}`);}
else {console.log(`${finalh}:${finalm}`);//
}
}
minutes (["1","46"]
