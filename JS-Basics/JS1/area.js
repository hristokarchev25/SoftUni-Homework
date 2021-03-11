function data (input)
{
    let name = input.shift();
    let projects = Number (input.shift());
    let hours = (projects * 3);
    console.log(` The architect ${name} will need ${hours} hours to complete ${projects} project/s.`);   
}
data (["Petar",
"9"]);