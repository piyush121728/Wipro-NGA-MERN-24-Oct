export class Person {
    constructor(name, age, institute) {
        this.name = name;
        this.age = age;
        this.institute = institute;
        this.id = ++Person.counter;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.institute}.`;
    }
    getAge() {
        return this.age;
    }
    showId() {
        return this.id;
    }
}
Person.counter = 0;
// ✅ Student class extending Person
export class Student extends Person {
    constructor(name, age, institute, skills) {
        super(name, age, institute);
        this.skills = skills;
        Student.totalStudents++;
    }
    getStudentDetails() {
        return `${this.greet()} I have the following skills: ${this.skills.join(", ")}.`;
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
    // 3️⃣ Return string for display
    display() {
        return `My age is ${this.getAge()} years and my skills are: ${this.skills.join(", ")}.`;
    }
    // 4️⃣ Static method to return total number of students created
    static getTotalStudents() {
        return Student.totalStudents;
    }
}
// 2️⃣ Static property to count total students
Student.totalStudents = 0;
// ✅ Instructor class extending Person
export class Instructor extends Person {
    constructor(name, age, institute, subject, experience) {
        super(name, age, institute);
        this.subject = subject;
        this.experience = experience;
    }
    teach() {
        return `${this.name} teaches ${this.subject} with ${this.experience} years of experience.`;
    }
    getInstructorDetails() {
        return `${this.greet()} ${this.teach()}`;
    }
}
