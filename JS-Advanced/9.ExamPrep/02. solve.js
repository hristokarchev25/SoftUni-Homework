class Vacation {
  constructor(organizer, destination, budget, kids = {}) {
    this.organizer = organizer;
    this.destination = destination;
    this.budget = budget;
    this.kids = kids;
  }

  registerChild(name, grade, budget) {
    if (!this.kids.hasOwnProperty(grade)) {
      this.kids[grade] = [];
    }

    if (this.kids[grade].includes(`${name}-${budget}`)) {
      return `${name} is already in the list for this ${this.destination} vacation.`
    } else {

      if (this.budget > budget) {

        for (let propName in this.kids) {

          if (this.kids[propName].length === 0) {
            delete this.kids[propName];
          }
        }

        return `${name}'s money is not enough to go on vacation to ${this.destination}.`
      }

      this.kids[grade].push(`${name}-${budget}`);
    }

    return this.kids[grade]
  }

  removeChild(name, grade) {

    for (let kidGrade of Object.keys(this.kids)) {
      if (kidGrade === grade.toString()) {
        for (let i = 0; i < this.kids[kidGrade].length; i++) {
          let [kidName, budget] = this.kids[kidGrade][i].split('-');

          if (name === kidName) {
            this.kids[kidGrade].splice(i, 1);

            return this.kids[kidGrade];
          }
        }
      }
    }

    return `We couldn't find ${name} in ${grade} grade.`
  }

  toString() {
    let numberOfChildren = this.numberOfChildren;

    if (numberOfChildren === 0) {
      return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
    }

    let allKids = {};
    let sortKeys = Object.keys(this.kids).sort((a, b) => a.localeCompare(b));

    for (let key of sortKeys) {
      allKids[key] = this.kids[key];
    }


    let output = `${this.organizer} will take ${numberOfChildren} children on trip to ${this.destination}\n`;

    for (let key of Object.keys(allKids)) {

      if (allKids[key].length > 0) {
        output += `Grade: ${key}\n`;

        for (let i = 0; i < allKids[key].length; i++) {
          output += `${i + 1}. ${allKids[key][i]}\n`;
        }
      }
    }

    return output;
  }

  get numberOfChildren() {
    let numberOfKids = 0;

    for (let grade of Object.keys(this.kids)) {
      numberOfKids += Number(this.kids[grade].length);
    }

    return numberOfKids;
  }
}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500)
console.log(vacation.toString());


