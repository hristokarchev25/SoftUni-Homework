function sec(input)
{
let firstTime = Number(input.shift());
let secondTime = Number(input.shift());
let thirdTime = Number(input.shift());

let total = firstTime+secondTime+thirdTime;
let minutes = Math.floor(total/60);
let secs = total%60;
if (secs < 10) {
    console.log(`${minutes}:0${secs}`);
}
else {console.log(`${minutes}:${secs}`);
}
}
sec ([35,
    45,
    44,
    ])