class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  greet() {
    console.log(`Hello ${this.name}, nice to meet you`);
  }
  showPosition() {
    console.log(`${this.name} is a ${this.position}`);
  }
}
const employee1 = new Employee("John", "Software Engineer", 100000);
console.log(employee1);
employee1.greet();
employee1.showPosition();
