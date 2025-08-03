const person = {
  firstName: "Dadan",
  lastName: "Nurohman",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);
