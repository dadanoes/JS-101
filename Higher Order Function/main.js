// ==== Higher Order Function (HOF) //

//⁡⁣⁢⁣​‌‌‍syntax sederhana:​⁡
function manipulasiArray(arr, callback) {
  // Mendefinisikan sebuah fungsi bernama 'manipulasiArray' yang menerima dua argumen:
  // 1. 'arr': Sebuah array yang akan dimanipulasi.
  // 2. 'callback': Sebuah fungsi (ini adalah Higher-Order Function!) yang akan dipanggil untuk setiap elemen array.
  let hasil = [];
  for (let i = 0; i < arr.length; i++) {
    // Memulai loop for yang akan mengiterasi (mengunjungi) setiap elemen dalam array 'arr'.
    // 'i' adalah indeks elemen saat ini.
    hasil.push(callback(arr[i]));
    // Memanggil fungsi 'callback' dengan elemen array saat ini (arr[i]) sebagai argumen.
    // Hasil dari pemanggilan 'callback' tersebut kemudian ditambahkan (push) ke array 'hasil'.
  }
  return hasil;
  // Mengembalikan array 'hasil' yang berisi elemen-elemen setelah dimanipulasi.
}
function kaliDua(x) {
  // Mendefinisikan sebuah fungsi bernama 'kaliDua' yang menerima satu argumen: 'x'.
  // Fungsi ini akan digunakan sebagai 'callback' pada fungsi 'manipulasiArray'.
  return x * 2;
  // Mengembalikan nilai 'x' yang dikalikan dengan 2.
}
let angka = [1, 2, 3, 4, 5];
// Mendeklarasikan sebuah array bernama 'angka' yang berisi angka-angka.
let hasil = manipulasiArray(angka, kaliDua);
// Memanggil fungsi 'manipulasiArray' dengan 'angka' sebagai array yang akan diiterasi
// dan 'kaliDua' sebagai fungsi callback.
// Artinya, setiap angka dalam array 'angka' akan dilewatkan ke fungsi 'kaliDua',
// dan hasilnya akan disimpan di variabel 'hasil'.

console.log(hasil);
// Mencetak isi dari variabel 'hasil' ke konsol.
// Output yang diharapkan adalah [2, 4, 6, 8, 10].

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
