const person = {
  name: "Dadan",
  age: 19,
  sayHello: function (value) {
    console.log(`Helo ${value}, Nama saya ${this.name}`);
  },
};
person.sayHello("dadan");
//fungsi 'this' disini merujuk kepada objek person
//person.sayHello merupakan method dari objek person
