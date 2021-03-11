function score (input)
{
    let enteredScore = Number(input.shift());
    let bonus = 0.0;

    if (enteredScore <=100) {bonus = 5;}
    else if (enteredScore > 1000) {bonus = enteredScore*0.1;} 
    else  {bonus = enteredScore*0.2;}
    if (enteredScore % 2 == 0) {bonus += 1;}
    else if (enteredScore % 10 == 5)  {bonus += 2;}

    console.log(bonus);
    console.log(enteredScore+bonus); 
}
score([15875])