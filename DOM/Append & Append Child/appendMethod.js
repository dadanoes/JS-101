const container = document.getElementById("container");

// Adding a text string and a DOM node
const span = document.createElement("span");
span.textContent = "World!";
container.append("Hello, ", span);

console.log(container.innerHTML); // Output: Hello, <span>World!</span>
