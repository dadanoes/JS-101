// ==== Higher Order Function (HOF) //

//⁡⁣⁢⁣​‌‌‍syntax sederhana:​⁡
function manipulasiArray(arr, callback) {
  let hasil = [];
  for (let i = 0; i < arr.length; i++) {
    hasil.push(callback(arr[i]));
  }
  return hasil;
}
function kaliDua(x) {
  return x * 2;
}
let angka = [1, 2, 3, 4, 5];
let hasil = manipulasiArray(angka, kaliDua);

console.log(hasil);

// ⁡⁣⁢⁣​‌‍​‌‌‍sytax advance:​​⁡
// logger.js - Modul utilitas logging
/**
 * Higher-Order Function untuk membuat fungsi logger kustom.
 * Fungsi ini menerima tipe log (misalnya, 'INFO', 'WARN', 'ERROR')
 * dan mengembalikan fungsi yang akan mencetak pesan dengan awalan tipe log tersebut.
 * @param {string} logType - Tipe log (misalnya, 'INFO', 'WARN', 'ERROR').
 * @returns {function(string): void} Sebuah fungsi yang menerima pesan dan mencetaknya.
 */
function createLogger(logType) {
  // Mengembalikan sebuah fungsi baru. Fungsi yang dikembalikan ini "mengingat" nilai logType (closure).
  return function (message) {
    // Mendapatkan tanggal dan waktu saat ini untuk timestamp
    const timestamp = new Date().toISOString();
    // Mencetak pesan ke konsol dengan format yang konsisten
    console.log(`[${timestamp}] [${logType}] ${message}`);
  };
}

// Mengekspor fungsi createLogger agar bisa digunakan di modul lain
export { createLogger };
