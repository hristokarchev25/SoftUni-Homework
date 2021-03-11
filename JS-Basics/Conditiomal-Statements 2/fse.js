function name (input)
{
    let examh = Number(input.shift());
    let examm = Number(input.shift());
    let arrh = Number(input.shift());
    let arrm = Number(input.shift());

    let examtime = examh*60 + examm;
    let arrtime = arrh*60 + arrm;

    let diff = examtime-arrtime;

    if (diff < 0)
    {console.log("Late");
} else if (diff <=30)
{
console.log("On time");
}
else {console.log("Early");
}
if (diff < 60) 
{console.log(`${diff} minutes before the start`);
}
else {
    let h = Math.floor(diff/60);
    let m = diff%60;
    console.log(`${h}:${m} hours before the start`);
    
}
}
name ([])