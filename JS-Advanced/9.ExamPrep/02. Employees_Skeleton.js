function solveClasses() {
 
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }
 
        addTask(id, taskName, priority) {
            if (priority === 'high') {
                this.tasks.unshift({
                    id,
                    taskName,
                    priority
                })
 
            } else {
                this.tasks.push({
                    id,
                    taskName,
                    priority
                })
            }
            return `Task id ${id}, with ${priority} priority, has been added.`
        }
        doTask() {
            let highPriorityTask = this.tasks.shift();
            if (this.tasks.length == 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
            return highPriorityTask
        }
        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }
 
        reviewTasks() {
           
            let output = ''
            output += `Tasks, that need to be completed:`;
            if (this.tasks.length > 0) {
                output += '\n'
                output += this.tasks.map(task =>`${task.id}: ${task.taskName} - ${task.priority}`).join('\n')
            }
            return output
        }
 
 
    }
 
 
    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.experience = experience
            this.baseSalary += bonus
        }
 
        learn(years) {
            return experience + years
        }
    }
 
    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.baseSalary += bonus
            this.experience = experience + 5
        }
      changeTaskPriority(taskId) {
     let result =   this.tasks.map(task => task.priority);
      
         result.reverse()
         return result(Number(taskId))
    }
    
}
return {
    Developer,
    Junior,
    Senior
}
}




const classes = result();
const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);

junior.learn(4);
const learnResult = junior.experience;
const learnExpect = 6;
expect(learnResult).to.be.eq(learnExpect);

const salaryResult = junior.baseSalary;
const salaryExpect = 1200;
expect(salaryResult).to.be.eq(salaryExpect);
/* let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
//console.log(developer.doTask());
console.log(developer.getSalary());

const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary()); */

/* const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]); */


/* Task id 1, with low priority, has been added.
Task id 2, with high priority, has been added.
Tasks, that need to be completed:
2: Update repository - high
1: Inspect bug - low
George Joestar has a salary of: 1000
 */

/* Jonathan Joestar has a salary of: 1200

high */

function solveClasses() {
    class Developer {
        constructor ( firstName, lastName ) {
            this.firstName = firstName;  
            this.lastName = lastName; 
            this.baseSalary = 1000; 
            this.tasks = []; 
            this.experience = 0; 
        }
        addTask ( id, name, priority ) {
            let obj = {id, name, priority};
            if(priority == 'high') this.tasks.unshift(obj);
            else this.tasks.push(obj);
            return Task id ${id}, with ${priority} priority, has been added.;
        }
        doTask() {
            if(this.tasks.length == 0) return ${this.firstName}, you have finished all your tasks. You can rest now.;
            let task = this.tasks.shift();
            return task.name;
        }
        getSalary() {
            return ${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary};
        }
        reviewTasks() {
            let msg = 'Tasks, that need to be completed:\n'; 
            for(let task of this.tasks) {
                msg += ${task.id}: ${task.name} - ${task.priority}\n;
            }
            return msg.trim();
        }
    }
    class Junior extends Developer {
        constructor( firstName, lastName, bonus, experience ) {
            super(firstName, lastName);
            this.baseSalary += bonus;
            this.experience += experience;
        }
        learn( years ) {
            this.experience += years;
        }
    }
    class Senior extends Developer {
        constructor( firstName, lastName, bonus, experience ) {
            super(firstName, lastName);
            this.baseSalary += bonus;
            this.experience += experience + 5;
        }
        changeTaskPriority(taskId) {
            let task = this.tasks.find(x => x.id == taskId);
            this.tasks = this.tasks.filter(x => x == task);
            if(task.priority == 'high') {
                task.priority = 'low';
                this.tasks.push(task);
            }
            else {
                task.priority = 'high';
                this.tasks.unshift(task);
            }
            return task;
        }
    }
    return {
        Developer,
        Junior,
        Senior
    }
}
function solveClasses() {
    class Developer {
        constructor ( firstName, lastName ) {
            this.firstName = firstName;  
            this.lastName = lastName; 
            this.baseSalary = 1000; 
            this.tasks = []; 
            this.experience = 0; 
        }
        addTask ( id, name, priority ) {
            let obj = {id, name, priority};
            if(priority == 'high') this.tasks.unshift(obj);
            else this.tasks.push(obj);
            return Task id ${id}, with ${priority} priority, has been added.;
        }
        doTask() {
            if(this.tasks.length == 0) return ${this.firstName}, you have finished all your tasks. You can rest now.;
            let task = this.tasks.shift();
            return task.name;
        }
        getSalary() {
            return ${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary};
        }
        reviewTasks() {
            let msg = 'Tasks, that need to be completed:\n'; 
            for(let task of this.tasks) {
                msg += ${task.id}: ${task.name} - ${task.priority}\n;
            }
            return msg.trim();
        }
    }
    class Junior extends Developer {
        constructor( firstName, lastName, bonus, experience ) {
            super(firstName, lastName);
            this.baseSalary += bonus;
            this.experience += experience;
        }
        learn( years ) {
            this.experience += years;
        }
    }
    class Senior extends Developer {
        constructor( firstName, lastName, bonus, experience ) {
            super(firstName, lastName);
            this.baseSalary += bonus;
            this.experience += experience + 5;
        }
        changeTaskPriority(taskId) {
            let task = this.tasks.find(x => x.id == taskId);
            this.tasks = this.tasks.filter(x => x == task);
            if(task.priority == 'high') {
                task.priority = 'low';
                this.tasks.push(task);
            }
            else {
                task.priority = 'high';
                this.tasks.unshift(task);
            }
            return task;
        }
    }
    return {
        Developer,
        Junior,
        Senior
    }
}