const userDiv = document.querySelector("[data-user-id]");
console.log(userDiv.dataset.userId); // Output: "123"
const clonedItem = list.children[0].cloneNode(true); // true for deep clone
list.appendChild(clonedItem);
const header = document.getElementById("header");
header.style.backgroundColor = "lightblue";
header.style.fontSize = "24px";
