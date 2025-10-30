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
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.institute}.`;
    }

    protected getAge(): number {
        return this.age;
    }

    public showId(): number {
        return this.id;
    }
}

// ✅ Student class extending Person
export class Student extends Person {
    // 1️⃣ Make skills public
    public skills: string[];

    // 2️⃣ Static property to count total students
    static totalStudents: number = 0;

    constructor(name: string, age: number, institute: string, skills: string[]) {
        super(name, age, institute);
        this.skills = skills;
        Student.totalStudents++;
    }

    public getStudentDetails(): string {
        return `${this.greet()} I have the following skills: ${this.skills.join(", ")}.`;
    }

    public addSkill(skill: string): void {
        this.skills.push(skill);
    }

    // 3️⃣ Return string for display
    public display(): string {
        return `My age is ${this.getAge()} years and my skills are: ${this.skills.join(", ")}.`;
    }

    // 4️⃣ Static method to return total number of students created
    static getTotalStudents(): number {
        return Student.totalStudents;
    }
}

// ✅ Instructor class extending Person
export class Instructor extends Person {
    private subject: string;
    private experience: number; // in years

    constructor(name: string, age: number, institute: string, subject: string, experience: number) {
        super(name, age, institute);
        this.subject = subject;
        this.experience = experience;
    }

    public teach(): string {
        return `${this.name} teaches ${this.subject} with ${this.experience} years of experience.`;
    }

    public getInstructorDetails(): string {
        return `${this.greet()} ${this.teach()}`;
    }
}
