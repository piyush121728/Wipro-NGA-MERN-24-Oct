export class Person {
    public name: string;
    protected age: number;
    readonly institute: string;
    private id: number;
    static counter: number = 0;

    constructor(name: string, age: number, institute: string) {
        this.name = name;
        this.age = age;
        this.institute = institute;
        this.id = ++Person.counter;
    }

    public greet(): string {
        return `Hello, my name is ${ this.name }, I am ${ this.age } years old and I study at ${ this.institute }.`;
    }

    protected getAge(): number {
        return this.age;
    }

    public showId(): number {
        return this.id;
    }
}

// Student class extends Person
export class Student extends Person {
    private skills: string[];

    constructor(name: string, age: number, institute: string, skills: string[]) {
        super(name, age, institute);
        this.skills = skills;
    }

    public getStudentDetails(): string {
        return `${this.greet()} I have the following skills: ${this.skills.join(
            ", "
        )}.`;
    }

    public addSkill(skill: string): void {
        this.skills.push(skill);
    }

    public display(): void {
        console.log(
            `My age is ${this.getAge()} years and my skills are: ${this.skills.join(
                ", "
            )}.`
        );
    }

    public greet(): string {
        return `Hello, my name is ${ this.name }, I am ${ this.age } years old and I study at ${ this.institute }.`;
    }
}