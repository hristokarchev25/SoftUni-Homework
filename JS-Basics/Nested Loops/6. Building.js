function building (input)
{
    let floors = Number(input.shift());
    let rooms = Number(input.shift());
    let toprint = "";
    
    for (let i = floors; i>=1; i--)
    {
        
        for (let j=0; j<rooms;j++)
        {
            if (floors === i)
            {toprint  += `L${i}${j} `;}
          
           else  if (i % 2 === 1)
            {
                toprint += `A${i}${j} `;
            }
            else  
            {
                toprint += `O${i}${j} `; 
            }
            
        }
        
        
            toprint += "\n";
        
    }

    
    
    console.log(toprint);
    
}
building([6,4])