let person = {
    firstName: 'Ico',
    lastName: 'Karchev',
    age: 19,
    grades: [2, 3, 4, 6],
    uni: {
        name: 'IU Varna',
        years: 4,
        adress: 'str',
        printReport: function () {
            console.log(` School name is ${this.name}`);
        }
    },
    reortGrades: function () {
        console.log(`My grades are: ${this.grades.join(', ')}`);
    },
    toString: function () {
        console.log(`My name is ${this.firstName} ${this.lastName} and i study in ${this.uni.name}`);
    }
}
person.location = {
    lat: 48.22,
    lng: 23.32,
}
/* console.log(`${person.firstName} - studies at ${person.uni.name}`);
console.log(person); */

/* person.reortGrades();
person.toString();
person.uni.printReport();
 */

//let {reortGrades} = person;
//reortGrades.call({grades: [4,4,4]})
//let { lastName: familyName, uni, ...halfPerson } = person;
//console.log(halfPerson);
//console.log(familyName);

//let {uni: {name}} = person;
//let name = person.uni.name;
//console.log(name);

/* let {grades,  ...personNOGrades} = person;
console.log(personNOGrades); */

 let cats = [
    {name: "Nachi",age:3},
    {name: "Nach",age:5},
    {name: "Na",age:2},
];
//let newCats = [...cats];
//newCats.forEach(x=> {
  //  x.age++;
//});
//console.log(cats); 

//let {grades : [firstGrade,secondGrade]} = person;
//console.log(firstGrade,secondGrade);
