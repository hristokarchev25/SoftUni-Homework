function ski (input)
{
let days = Number(input.shift());
let room = input.shift();
let grade = input.shift();


days= days-1;
let price =0;
switch (room)
{ 
    case "room for one person":
        price = days*18.00;    
    break;
    case "apartment":
        price = days*25.00;
        if (days < 10) {price = price * 0.70;}
        else if ( days <= 15) {price = price * 0.65;}
        else {price = price / 2;}
    break;
    case "president apartment":
        price = days*35.00;
        if (days < 10) {price = price *0.90;}
        else if ( days <= 15) {price = price *0.85;}
        else  {price = price * 0.80;}
    break;
}
if (grade == "positive") 
{
price = price *  1.25;
}
else if (grade == "negative")
{
price = price * 0.90;
}

console.log(price.toFixed(2));

}
ski ([30, "president apartment", "negative"])