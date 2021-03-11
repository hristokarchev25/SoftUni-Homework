function conv (input)
{
    let num = Number(input.shift());
    let enteredMetric = input.shift();
    let metricToConv = input.shift();
    let result = 0;

 if (enteredMetric === "mm" && metricToConv === "m") {
        result = num/1000.0;
    }
 else if (enteredMetric === "mm" && metricToConv === "cm")
   {
       result = num/10.000;
   }
 else if (enteredMetric === "m" && metricToConv === "mm")
   {
    result = num/0.0010000;
   }
else if (enteredMetric === "m" && metricToConv === "cm")
{
 result = num*100.00;
}
else if (enteredMetric === "cm" && metricToConv === "mm")
{
 result = num/0.10000;
}
else if (enteredMetric === "cm" && metricToConv === "m")
{
result = num/100.00;
}
    
    console.log(result.toFixed(3));
    
}
conv ([45,"cm","mm"])