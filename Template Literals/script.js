// interpolasi string
let name1 = "Alice";
let greeting = `Hello, ${name1}!`; // String interpolation
console.log(greeting); // Output: "Hello, Alice!"

//   Multi line string
let message = `This is a message
that spans multiple
lines.`;
console.log(message);

// Embedding Expressions
let a = 5;
let b = 10;
let result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: "The sum of 5 and 10 is 15."

//   Tagged Template Literals 🏷️:
function tag(strings, ...values) {
  console.log(strings); // Array of string literals
  console.log(values); // Array of interpolated values
}

let name = "Alice";
let age = 30;
tag`Hello, my name is ${name} and I am ${age} years old.`;
// Output:
// [ 'Hello, my name is ', ' and I am ', ' years old.' ]
// [ 'Alice', 30 ]
