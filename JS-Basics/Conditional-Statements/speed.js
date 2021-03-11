function speed (input)
{
let speedNumber = Number(input.shift());

if (speedNumber <= 10)
{console.log("slow");}
else if (speedNumber <= 50)
{console.log("average");}
else if (speedNumber <= 150)
{console.log("fast");}
else if (speedNumber <= 1000) {console.log("ultra fast");}
else {console.log("extremely fast");}
}
speed([3500])