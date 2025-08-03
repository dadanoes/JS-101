//mengubah konten 1. elemen.textContent
const judul = document.getElementById("judul");
judul.textContent = "Judul Baru";
console.log(judul.textContent);

//   mengubah konten 2. elemen.innerHTML
const container = document.getElementById("container");
container.textContent = "container";
console.log(container.textContent);

// mengubah atribut:
const paragraf = document.getElementById("paragraf");
paragraf.setAttribute("class", "bg-red");

//manipulasi style
const li = document.querySelector(".list-1");
li.style.backgroundColor = "red";

//manipulasi style p
const p = document.querySelectorAll("p");
p.forEach((item) => (item.style.backgroundColor = "green"));
