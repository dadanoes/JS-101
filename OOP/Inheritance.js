// Inheritance = object dapat mewarisi properti dan method dari object lain
class Employee extends Person {
  constructor(firstName, lastName, age, jobTitle) {
    super(firstName, lastName, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  describeJob() {
    console.log(`${this.firstName} is a(n) ${this.jobTitle}`);
  }
}

const emp = new Employee("Jane", "Smith", 28, "Software Developer");
emp.greet(); // Output: Hello, Jane
emp.describeJob(); // Output: Jane is a(n) Software Developer
