mengakses DOM:

- getElementById = mengakses element berdasarkan id
- getElementsByClassName = mengakses element berdasarkan class name
- getElementsByTagName = mengakses element berdasarkan tag name (dinamis)
- querySelector = mengakses element berdasarkan selector (statik)
- querySelectorAll = mengakses semua element berdasarkan selector (statik)

// By ID
const header = document.getElementById("header");
// By Class
const items = document.getElementsByClassName("item");
// By Tag
const paragraphs = document.getElementsByTagName("p");
// Using querySelector and querySelectorAll
const firstItem = document.querySelector(".item"); // Selects the first item with class "item"
const allItems = document.querySelectorAll(".item"); // Selects all items with class "item"

mengakses Parent, Child, and Sibling Nodes

const list = document.querySelector("ul");

// Accessing children
const children = list.children;

// Accessing parent
const parent = list.parentNode;

// Accessing next sibling
const nextSibling = list.nextElementSibling;

// Accessing previous sibling
const previousSibling = list.previousElementSibling;

