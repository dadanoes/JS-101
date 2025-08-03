function getClick() {
  console.log("clicked"); //notif masuk di console
}
// add event listener
const button = document.getElementById("btn");
button.addEventListener("click", function () {
  alert("sudah disubmit");
});
button.addEventListener("mouseover", function () {
  alert("mouse over");
});
// merubah warna
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  p1.style.color = "red";
});
