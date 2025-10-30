import { Person, Student, Instructor } from "./person";

const person1 = new Person("Alice", 30, "Wonderland University");
const student1 = new Student("Bob", 20, "Builder Institute", ["JavaScript", "TypeScript"]);

// 1️⃣ Clone student using spread operator and add new skill
const clonedStudent = { ...student1, skills: [...student1.skills, "React"] };

// 2️⃣ Try changing readonly property (❌ will cause error if uncommented)
// person1.institute = "New Institute"; // ❌ Error: Cannot assign to 'institute' because it is a read-only property.

// 3️⃣ Create Instructor instance
const instructor1 = new Instructor("Charlie", 40, "Tech Academy", "TypeScript", 10);

const outputDiv = document.getElementById("output") as HTMLDivElement;

if (outputDiv) {
  outputDiv.innerHTML = `
    <h2>Person Details</h2>
    <p>${person1.greet()}</p>
    <p><strong>Person ID:</strong> ${person1.showId()}</p>
    <hr>

    <h2>Student Details</h2>
    <p>${student1.getStudentDetails()}</p>
    <p>${student1.display()}</p>
    <p><strong>Student ID:</strong> ${student1.showId()}</p>
    <hr>

    <h2>Cloned Student</h2>
    <p>${clonedStudent.name} (${clonedStudent.institute})</p>
    <p>Skills: ${clonedStudent.skills.join(", ")}</p>
    <hr>

    <h2>Instructor Details</h2>
    <p>${instructor1.getInstructorDetails()}</p>
    <p><strong>Instructor ID:</strong> ${instructor1.showId()}</p>
    <hr>

    <p><strong>Total Students Created:</strong> ${Student.getTotalStudents()}</p>
    <p><strong>Person Counter:</strong> ${Person.counter}</p>
  `;
}
