function grass (input)
{
    let price = Number(input.shift());
    let yard = (price * 7.61).toFixed(2);
    let discount = (yard * 0.18).toFixed(2);
    let final = (yard - discount).toFixed(2);
    console.log(`The final price is: ${final} lv.`);
    console.log(`The discount is: ${discount} lv.`);
    
    
}
grass ([
135
]);