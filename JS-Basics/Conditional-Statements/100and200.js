function num (input)
{
let number = Number(input.shift());
if (number < 100) {console.log("Less than 100");}
else if (number > 200) {console.log("Greater than 200");}
else {console.log("Between 100 and 200");}
}
num ([120])