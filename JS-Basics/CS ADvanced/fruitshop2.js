function shop(input)
{
    let fruit = input.shift();
    let weekday = input.shift();
    let countproduct = Number(input.shift());
    let price = 0;
    let isError = false;
    if (weekday == "Monday" || weekday == "Tuesday" || weekday == "Wednesday" || weekday == "Thursday" || weekday == "Friday") 
    {
         switch (fruit)
        {
            case "banana": price = countproduct*2.50; break;
            case "apple": price = countproduct*1.20; break;
            case "orange": price = countproduct*0.85;break;
            case "grapefruit": price = countproduct*1.45; break;
            case "kiwi": price= countproduct*2.70; break;
            case "pineapple": price = countproduct*5.50; break;
            case "grapes": price = countproduct*3.85; break;
            default:isError = true; break;
    }
     }
    else if  (weekday == "Saturday" || weekday == "Sunday")
    {
      
        switch(fruit)
        {
            case "banana": price = countproduct*2.70; break;
            case "apple": price = countproduct*1.25; break;
            case "orange": price = countproduct*0.90;break;
            case "grapefruit": price = countproduct*1.60; break;
            case "kiwi": price= countproduct*3; break;
            case "pineapple": price = countproduct*5.60; break;
            case "grapes": price = countproduct*4.20; break;
            default: isError = true; break;
        }
    }
    else {isError = true;}

    if (!isError){
    console.log(price.toFixed(2));
    } else {console.log("error");
    }
}
shop(["tomato","Monday",0.5])