function solveClasses() {

    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.problems = [];
        }

        toString() {
            return `${this.firstName} ${this.lastName} is part of SoftUni community now!`;
        }
    }

    class Teacher extends Person {
        constructor(firstName, lastName) {
            super(firstName, lastName);
        }

        createProblem(id, difficulty) {
            //ToDO:
        }

        getProblems() {
            //
        }

        showProblems(id) {
            //
        }
    }

    class Student extends Person {
        constructor(firstName, lastName, graduationCredits, problems) {
            super(firstName, lastName);

            this.graduationCredits = 0;
            //
            this.problems = [];
        }

        solveProblem(id) {
            //
        }
        graduate() {
    
        }
    }
    return {
        Person,
        Teacher,
        Student
    }
}
