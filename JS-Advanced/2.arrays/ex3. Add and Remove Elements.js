function name(array) {
    let output = [];
    let count = 1;
    array.forEach(element => {
        if (element == "add") {
            output.push(count);
        } else {
            output.pop();
        }
        count++;
    });    
    output.length == 0 ? console.log("Empty") : console.log(output.join("\n")); 
}
name(['add', 
'add', 
'add', 
'add']
);