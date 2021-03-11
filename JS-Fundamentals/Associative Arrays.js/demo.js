//let value = "Lisa Smith";

//let contacts = {
 //   'John Smith': '+1211424',
 //   [value] : '+76867769',
//};

//let phone = contacts['Lisa Smith'];

//console.log(phone);


//let contacts = new Map();

//contacts.set('Jane Dane','088343535');
//contacts.set('Brooks','088485346');
//contacts.delete('Brooks');
//if (contacts.has('Brooks')) {
///    console.log('yes');   
//} else {
//console.log('no');
//}

let numbers = new Map();

numbers.set('Three', 3);
numbers.set('One', 1);
numbers.set('Two', 2);

let entries = Array.from(numbers.entries());
let sorted = entries.sort((a,b)=> {return a[1]-b[1]});
//console.log(sorted);
for (const kvp of sorted) {
    console.log(`${kvp[0]} => ${kvp[1]}`);
}