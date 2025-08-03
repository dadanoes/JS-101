const info = document.getElementById("info");
const userId = info.getAttribute("data-user-id"); // Read custom attribute
const role = info.getAttribute("data-role"); // Read custom attribute

console.log(userId); // Output: 12345
console.log(role); // Output: admin

// Modify custom attributes
info.setAttribute("data-role", "super-admin");
console.log(info.getAttribute("data-role")); // Output: super-admin
