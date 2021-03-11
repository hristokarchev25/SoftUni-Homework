function solve(input) {
    let companies = {};
    for(let line of input) {
        let [name,id] = line.split(" -> ");
        if(!companies.hasOwnProperty(name)) {
            companies[name] = [];
        }
        companies[name].push(id);
    }
    let sorted = Object.entries(companies).sort((a,b)=>a[0].localeCompare(b[0]));

    for (let ele of sorted) {
        console.log(ele[0]);
        let set = new Set(ele[1]);
        for (let number of set) {
            console.log(`-- ${number}`);
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])