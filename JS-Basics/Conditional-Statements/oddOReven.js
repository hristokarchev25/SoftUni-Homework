function num (input)
{
let number = Number(input.shift());
if (number % 2 == 0)
    {
    console.log("Even");
    }
   
    else {
        console.log("Odd");
         }
}
num ([7])