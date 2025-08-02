//menambah dokumen (appendChild)
const newDiv = document.createElement("div");
newDiv.textContent = "Ini div baru";
document.body.appendChild(newDiv);

//menambah dokumen (insertBefore)
const newLi = document.createElement("li");
newLi.textContent = "Ini div baru 2";
document.body.insertBefore(newLi, newDiv);

//menghapus elemen (remove child)
const judul = document.getElementById("judul");
document.body.removeChild(judul);

//menghapus elemen (remove)
const item1 = document.getElementById("item1");
item1.remove();
