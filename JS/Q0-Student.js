import { Person } from "./Q0-Person.js";

class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }

  printName() {
    console.log(`The student's full name: ${this.firstName} ${this.lastName}`);
  }

  printAge() {
    console.log(this.age);
  }
}

let person1 = new Person("Tamara", "Osipov", 28);
console.log(person1);
let stu1 = new Student("Tamara", "Osipov", 28, 12);
console.log(stu1);
stu1.printName();
stu1.printAge();
