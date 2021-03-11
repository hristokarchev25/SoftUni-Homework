function perfect(num) {
    let count = 0;
   for(let i=1;i<=num/2;i++)
     {
         if(num%i === 0)
          {
            count += i;
          }
     }
   
     if(count === num && count !== 0)
        {
       console.log("We have a perfect number!");
        } 
     else
        {
       console.log("It's not so perfect.");
        }   
}
perfect(28);