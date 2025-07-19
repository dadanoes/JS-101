Memodifikasi DOM berkali-kali bisa lambat. 
Cobalah mengelompokkan perubahan atau menggunakanDocumentFragment.
const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${i + 1}`;
  fragment.appendChild(newItem);
}
list.appendChild(fragment);

Using requestAnimationFrame for Animations
To optimize animations, use requestAnimationFrame to manage rendering more efficiently.
function animate() {
  list.style.left = parseInt(list.style.left || 0) + 1 + "px";
  requestAnimationFrame(animate);
}
animate();
