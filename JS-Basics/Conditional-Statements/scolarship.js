function scholarship (input)
{
let income = Number(input.shift());
let average = Number(input.shift());
let minProfit = Number(input.shift());

let social = 0;
let excellent = 0;

if (income <= minProfit && average >= 4.50) 
{social = parseInt(minProfit*0.35);}

 if (average >= 5.50 )
{excellent = parseInt(average*25);}

if (social>excellent) 
{console.log(`You get a Social scholarship ${social} BGN`); }
else if (excellent>social)
{console.log(`You get a scholarship for excellent results ${excellent} BGN`);
}
else {console.log("You cannot get a scholarship!");
}

}

scholarship([480.00,
    4.60,
    450.00
    
    
    ])