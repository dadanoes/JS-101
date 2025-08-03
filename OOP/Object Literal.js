//Object Literal
//Object Literal adalah sebuah object yang didefinisikan dengan cara yang lebih sederhana dan mudah
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.firstName);
  },
};

person.greet(); // Output: Hello, John
