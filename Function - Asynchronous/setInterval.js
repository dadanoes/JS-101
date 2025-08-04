const setTime = () => {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();

  document.body.appendChild(header);
};

setInterval(setTime, 1000);
