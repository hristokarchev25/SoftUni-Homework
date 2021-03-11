function stepen (input)
{
let enteredNUM = Number(input.shift());

for (let i = 0; i <= enteredNUM;  i+=2) {
    console.log(2**i);
    
}
}
stepen([7])