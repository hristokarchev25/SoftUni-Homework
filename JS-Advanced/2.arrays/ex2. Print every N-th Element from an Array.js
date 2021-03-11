function name(array) {
    let lastElement = Number(array.pop());
    array.forEach((element,index) => {
        if (index % lastElement == 0) {
            console.log(element);
        }
    });
}
name(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)