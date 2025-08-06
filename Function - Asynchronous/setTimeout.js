const addElement = () => {
  const header = document.createElement("h1");
  header.textContent = "Ini test addElement";

  document.body.appendChild(header);
};

setTimeout(addElement, 4000);
console.log("Program selesai");
