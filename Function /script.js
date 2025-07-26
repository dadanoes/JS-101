//------ Function Declaration (Deklarasi Fungsi)
function greet(name) {
  console.log("Hello, " + name);
}
greet("Dadan");

// Function expression
const add = function (a, b) {
  return a + b;
};

// Calling the function
console.log(add(2, 3)); // Output: 5

//------ Function Parameter/Function Argumen
function sayHello(firstName, lastName) {
  console.log(`halo: ${firstName} ${lastName}`);
}
sayHello("Dadan", "Nurohman");
// - firstName & lastName adalah parameter atau argumen

//------ Function return value
function siswa(firstName, lastName) {
  const say = `saya ${firstName} ${lastName}`;
  return say;
}
//memanggil function dan menangkap return valuenya
const result = siswa("Dadan", "Nur");
console.log(`${result}`);

//------ Menghentikan eksekusi dengan function return
function hitungUmur(usia) {
  if (usia < 18) {
    return "Kamu belum Dewasa";
  } else {
    return "Kamu Dewasa";
  }
}
const result2 = hitungUmur(17);
console.log(result2);
