function nope (input)
{
    let num = Number(input.shift());
     
    if (num >= -100 && num <= 100 && num !=0)  
    {console.log("Yes");
    }  else {console.log("No");
    }
    }

nope([0])