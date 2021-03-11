function num (input)
{
let enteredNUM = Number(input.shift());
for (let n = 1; n <= enteredNUM; n+=3)
{
    console.log(n);
}
}
num ([21])