function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let i = 0; i < input.length; i++) {
        let [name, ageText] = input[i].split(" ");
        let cat = new Cat(name, Number(ageText));
        cat.meow();
    };
}
solve(['Mellow 2', 'Tom 5']);