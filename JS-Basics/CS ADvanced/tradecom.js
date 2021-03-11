function trader (input)
{
let city = input.shift();
let sales = Number(input.shift());
let result = 0;
let isError = false;
if (city == "Sofia")
{
    if (sales >= 0 && sales <= 500) 
    {result = sales*0.05;}
    else if (sales > 500 && sales <= 1000)
    {result= sales*0.07;}
    else if (sales > 1000 && sales <= 10000)
    {result= sales*0.08;}
    else if (sales > 10000)
    {result = sales*0.12;}
    else {isError = true;}
}
else if (city == "Varna")
{
    if (sales >= 0 && sales <= 500) 
    {result = sales*0.045;}
    else if (sales > 500 && sales <= 1000)
    {result= sales*0.075;}
    else if (sales > 1000 && sales <= 10000)
    {result= sales*0.1;}
    else if (sales > 10000)
    {result = sales*0.13;}
    else {isError=true;}
}
else if (city == "Plovdiv")
{
    if (sales >= 0 && sales <= 500) 
    {result = sales*0.055;}
    else if (sales > 500 && sales <= 1000)
    {result= sales*0.08;}
    else if (sales > 1000 && sales <= 10000)
    {result= sales*0.12;}
    else if (sales > 10000)
    {result = sales*0.145;}
    else {isError=true;}
}
    else {isError=true;}
    if (!isError)
    {
        console.log(result.toFixed(2));
    } else 
    {
        console.log("error");
    }
}
trader (["Kaspichan",-50])