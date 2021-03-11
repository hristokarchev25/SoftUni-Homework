function areas (input)
{
let kind = input.shift();
let result = 0;

if (kind === "square") {let a = Number(input.shift());
result = a*a;
}

else if (kind ==="rectangle") {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    result = num1*num2;
    }
else if (kind === "circle"){
    let b = Number(input.shift());
    result = Math.PI*(b*b);
    } 
else if (kind=== "triangle"){
    let c = Number(input.shift());
    let h = Number(input.shift());
    result = (h*c)/2;
}
console.log(result.toFixed(3));
}
areas (["rectangle",7,2.5])