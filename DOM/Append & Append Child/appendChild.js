const container = document.getElementById("container");

// Adding a DOM node
const span = document.createElement("span");
span.textContent = "World!";
container.appendChild(span);

console.log(container.innerHTML); // Output: <span>World!</span>
