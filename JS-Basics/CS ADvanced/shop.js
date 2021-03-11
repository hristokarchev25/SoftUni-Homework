function shop (input)
{
    let product = input.shift();
    let city = input.shift();
    let num = Number(input.shift());
    let price = 0;

    if (city ==="Sofia")
    {
        if (product === "coffee")
        {price = num*0.50; console.log(price);}
      
        else if (product === "water")
        {price = num*0.80; console.log(price);}
      
        else if (product === "beer")
        {price = num*1.20; console.log(price);}
        
        else if (product === "sweets")
        {price = num*1.45; console.log(price);}
        
        else if (product === "peanuts")
        {price = num*1.60; console.log(price);}
    }
    else if (city === "Plovdiv")
    {
        if (product === "coffee")
        {price = num*0.40; console.log(price);}
      
        else if (product === "water")
        {price = num*0.70; console.log(price);}
      
        else if (product === "beer")
        {price = num*1.15; console.log(price);}
        
        else if (product === "sweets")
        {price = num*1.30; console.log(price);}
        
        else if (product === "peanuts")
        {price = num*1.50; console.log(price);}
    }
    else if (city === "Varna")
    {
        if (product === "coffee")
        {price = num*0.45; console.log(price);}
      
        else if (product === "water")
        {price = num*0.70; console.log(price);}
      
        else if (product === "beer")
        {price = num*1.10; console.log(price);}
        
        else if (product === "sweets")
        {price = num*1.35; console.log(price);}
        
        else if (product === "peanuts")
        {price = num*1.55; console.log(price);}
    }


}
shop(["peanuts","Plovdiv",1])