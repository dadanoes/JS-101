======= Arrow Function ======

Arrow Function adalah cara singkat untuk menulis function expression

⁡⁣⁢⁣contohnya⁡:
let tambah = (a, b) => {
  return a + b;
};
console.log(tambah(4, 5));

// ⁡⁣⁢⁣Catatan⁡:
- Jika function hanya memiliki satu pernyataan, bisa hilangkan tanda {} dan kata kunci return
- Jika function memiliki lebih dari satu parameter, harus menggunakan tanda ()
- Arrow function tidak bisa digunakan sebagai constructor function

⁡⁣⁢⁣menjadi⁡:
let tambah = (a, b) => a + b;
console.log(tambah(4, 5));