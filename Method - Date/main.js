//~~~~~~~~~~~~ Date Object ~~~~~~~~~~~~//
// memungkinkan kita untuk mendapatkan tanggal dan waktu saat ini

// ======== membuat Date Object ======= //

// Tanggal dan waktu saat ini
let now = new Date();
console.log("ini adalah tanggal dan waktu saat ini", now);

// Menggunakan string
let specificDate = new Date("August 20, 2024 10:30:00");
console.log("ini adalah tanggal spesifik", specificDate);

// Menggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)
let customDate = new Date(2024, 7, 20, 10, 30);
console.log("ini adalah custom Date", customDate);
// Bulan ke-8 (Agustus, karena bulan dimulai dari 0)

// ======== ⁡⁣⁣⁢Mengambil Informasi Tanggal dan Waktu⁡ ========= //
let today = new Date();
console.log(today.getFullYear()); //ambil tahunnya saja
console.log(today.getMonth()); //ambil bulannya saja
console.log(today.getDate()); //ambil tanggalnya saja
console.log(today.getDay()); //ambil harinya saja
console.log(today.getHours()); //ambil jamnya saja
console.log(today.getMinutes()); //ambil menitnya saja
console.log(today.getSeconds()); //ambil detiknya saja
console.log(today.getMilliseconds()); //ambil milidetiknya saja
console.log(today.getTime()); //untuk mengembalikan nilai waktu sejak 1 Januari 1970

// ======= ⁡Mengatur Tanggal dan Waktu⁡ ======= //
let date = new Date();

// Mengatur tahun menjadi 2025
date.setFullYear(2025);

// Mengatur bulan menjadi Desember (11, karena bulan dimulai dari 0)
date.setMonth(11);

// Mengatur hari menjadi 25
date.setDate(29);
console.log(date);

// ⁡⁣ ===== ⁢Perhitungan Waktu dengan Date Object⁡ ===== //
let startDate = new Date(2024, 7, 20, 10, 30);
let endDate = new Date(2024, 8, 3, 10, 30);

let diff = endDate - startDate;
console.log(diff); //miliseconds

let diffIndays = diff / (1000 * 3600 * 24);
console.log(diffIndays);
