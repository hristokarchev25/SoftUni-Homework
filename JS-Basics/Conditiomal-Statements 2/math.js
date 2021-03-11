function math (input)
{
 let num1 = Number(input.shift());
 let num2 = Number(input.shift());
 let symbol = input.shift();

 let result = 0;
 let type = "";
 switch (symbol)
 {
     case "+":
         result = Math.abs(num1+num2);
         if (result % 2 === 0) {type = "even";}
         else {type = "odd";}
         console.log(`${num1} ${symbol} ${num2} = ${result} - ${type}`);
     break;
     case "-":
         result = num1-num2;
         if (result % 2 === 0) {type = "even";}
         else {type = "odd";}
         console.log(`${num1} ${symbol} ${num2} = ${result} - ${type}`); 
     break;
     case "*":
         result = Math.abs(num1*num2);
         if (result % 2 === 0) {type = "even";}
         else {type = "odd";}
         console.log(`${num1} ${symbol} ${num2} = ${result} - ${type}`);
     break;
     case "/":
         result = Math.abs(num1/num2);
         if (num2 === 0)
         {console.log(`Cannot divide ${num1} by zero`);}
         else if (num1 === 0) {console.log(`Cannot divide ${num2} by zero`);}
         else {console.log(`${num1} ${symbol} ${num2} = ${result.toFixed(2)}`);
         }
     break;
     case "%":
         result = Math.abs(num1%num2);
         if (num2 === 0)
         {console.log(`Cannot divide ${num1} by zero`);}
         else if (num1 === 0) {console.log(`Cannot divide ${num2} by zero`);}
         else {console.log(`${num1} ${symbol} ${num2} = ${result}`);}
     break;
}

}

math ([])