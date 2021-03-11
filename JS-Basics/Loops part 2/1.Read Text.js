function read (input)
{
let text = input.shift();
while (text !== "Stop")
{
    console.log(text);
    text = input.shift();
    
    
}


}
read(["Ivan","Drago","Stop","fdsg"])