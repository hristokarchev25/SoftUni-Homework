function solve(input) {
    let result = new Map();
    let oddArray = [];
    let evenArray = [];
    for (let index in input) {
        if (index % 2 !== 0) {
            oddArray.push(input[index]);
        } else {
            evenArray.push(input[index]);
        }
    }

    console.log(splitting(oddArray));
    //console.log(evenArray);
    function splitting(array) {
        let elemnts = [];
    for (let ele of array) {
        elemnts = ele.split(", ");
    }
    return elemnts;
}


    result.set(evenArray, oddArray);
   // console.log(result);
   /// for (let kvp of result.entries()) {
    //    console.log(`${kvp[0]} -> ${kvp[1]}`);
    //}

}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

function Main(input) {
    let inputArr = [];
    for (let currentLine of input) {
        inputArr.push(currentLine)
    }
 
    let resourceAndQuantity = new Map();
 
    for (let i = 0; i < inputArr.length; i += 2) {
        let resource = inputArr[i];
        if (resource.toLowerCase() == "stop") {
            break;
        }
        let quantity = parseInt(inputArr[i + 1]);
 
        if (resource in resourceAndQuantity) {
            resourceAndQuantity[resource] += quantity;
        }
        else {
            resourceAndQuantity[resource] = quantity;
        }
    }
 
    for (let key in resourceAndQuantity) {
        if (resourceAndQuantity.hasOwnProperty(key)) {
            console.log(key + ' -> ' + resourceAndQuantity[key]);
        }
    }
}