function hotel (input)
{
let month = input.shift();
let days = Number(input.shift());

let priceStudio = 0;
let priceApartment = 0;

if (month === "May" || month === "October")
{
priceStudio = days*50.00;
priceApartment = days*65.00;

if (days > 14) {priceStudio *=0.70; priceApartment *= 0.90 ;}
else if (days > 7) {priceStudio *=0.95;}
}

else if (month === "June" || month === "September")
{
priceStudio = days*75.20;
priceApartment = days*68.70;
if (days > 14) {priceStudio *= 0.80; priceApartment *= 0.90;}
}

else if (month === "July" || month === "August")
{
priceStudio = days*76.00;
priceApartment = days*77.00;
if (days > 14) {priceApartment *= 0.90;}
}

console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);


}
hotel (["June",14])