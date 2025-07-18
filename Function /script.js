// Function Declaration (Deklarasi Fungsi)
function greet(name) {
  console.log("Hello, " + name);
}
greet("Dadan");

// Function Parameter/Function Argumen
function sayHello(firstName, lastName) {
  console.log(`halo: ${firstName} ${lastName}`);
}
sayHello("Dadan", "Nurohman");
// - firstName & lastName adalah parameter atau argumen

// Function return value
function siswa(firstName, lastName) {
  const say = `saya ${firstName} ${lastName}`;
  return say;
}
//memanggil function dan menangkap return valuenya
const result = siswa("Dadan", "Nur");
console.log(`${result}`);
