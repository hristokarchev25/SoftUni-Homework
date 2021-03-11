function shop (input)
{
    let fruit = input.shift();
    let weekday = input.shift();
    let countproduct = Number(input.shift());
    let price = 0;

    switch (weekday)
    {
        case "Monday":
            switch (fruit)
            {
                case "banana": price = countproduct*2.50; break;
                case "apple": price = countproduct*1.20; break;
                case "orange": price = countproduct*0.85;break;
                case "grapefruit": price = countproduct*1.45; break;
                case "kiwi": price= countproduct*2.70; break;
                case "pineapple": price = countproduct*5.50; break;
                case "grapes": price = countproduct*3.85; break;
                default:
            console.log("error"); break;
            }
        case "Tuesday":
            switch (fruit)
            {
                case "banana": price = countproduct*2.50; break;
                case "apple": price = countproduct*1.20; break;
                case "orange": price = countproduct*0.85;break;
                case "grapefruit": price = countproduct*1.45; break;
                case "kiwi": price= countproduct*2.70; break;
                case "pineapple": price = countproduct*5.50; break;
                case "grapes": price = countproduct*3.85; break;
                default:
            console.log("error"); break;
            }   
        case "Wednesday":
            switch (fruit)
            {
                case "banana": price = countproduct*2.50; break;
                case "apple": price = countproduct*1.20; break;
                case "orange": price = countproduct*0.85;break;
                case "grapefruit": price = countproduct*1.45; break;
                case "kiwi": price= countproduct*2.70; break;
                case "pineapple": price = countproduct*5.50; break;
                case "grapes": price = countproduct*3.85; break;
                default:
            console.log("error"); break;
            } 
        case "Thursday":
            switch (fruit)
            {
                case "banana": price = countproduct*2.50; break;
                case "apple": price = countproduct*1.20; break;
                case "orange": price = countproduct*0.85;break;
                case "grapefruit": price = countproduct*1.45; break;
                case "kiwi": price= countproduct*2.70; break;
                case "pineapple": price = countproduct*5.50; break;
                case "grapes": price = countproduct*3.85; break;
                default:
            console.log("error"); break;
            }
        case "Friday":
            switch (fruit)
            {
                case "banana": price = countproduct*2.50; break;
                case "apple": price = countproduct*1.20; break;
                case "orange": price = countproduct*0.85;break;
                case "grapefruit": price = countproduct*1.45; break;
                case "kiwi": price= countproduct*2.70; break;
                case "pineapple": price = countproduct*5.50; break;
                case "grapes": price = countproduct*3.85; break;
                default:
            console.log("error"); break;
            }
        case "Saturday":
            switch (fruit)
            {
                case "banana": price = countproduct*2.70; break;
                case "apple": price = countproduct*1.25; break;
                case "orange": price = countproduct*0.90;break;
                case "grapefruit": price = countproduct*1.60; break;
                case "kiwi": price= countproduct*3; break;
                case "pineapple": price = countproduct*5.60; break;
                case "grapes": price = countproduct*4.20; break;
                default:
            console.log("error"); break;
            }
        case "Sunday":
            switch(fruit)
            {
                case "banana": price = countproduct*2.70; break;
                case "apple": price = countproduct*1.25; break;
                case "orange": price = countproduct*0.90;break;
                case "grapefruit": price = countproduct*1.60; break;
                case "kiwi": price= countproduct*3; break;
                case "pineapple": price = countproduct*5.60; break;
                case "grapes": price = countproduct*4.20; break;
                default:
                 console.log("error"); break;
            }
        
            
    }
        console.log(price.toFixed(2));
        
}
shop (["orange","Sunday", 3])