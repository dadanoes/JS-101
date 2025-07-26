//~~~~~~~~~~~~ ⁡⁢⁣⁢​‌‌‍‍𝗠𝗔𝗧𝗘𝗠𝗔𝗧𝗜𝗞𝗔⁡ ~~~~~~~~~~~~//
// math object adalah objek bawaan yg berisi berbagai properti dan metode perhitungan matematika
// ==== properti math ======
// * Math.PI: Mengembalikan nilai π (3.14159...).
// * Math.E: Mengembalikan nilai konstanta Euler (2.718...).

console.log("ini adalah nilai PI", Math.PI);
console.log("ini adalah nilai Euler", Math.E);

// ====== METODE MATEMATIKA ====== //
console.log(Math.abs(-7)); // untuk mengembalikan nilai mutlak
console.log(Math.pow(2, 5)); // untuk memangkatkan
console.log(Math.sqrt(16)); // untuk akar kuadrat
console.log(Math.cbrt(8)); // untuk akar kubik
console.log(Math.max(1, 13, 89, 2, 75)); // untuk nilai maksimal
console.log(Math.min(1, 13, 89, 2, 75)); // untuk nilai minimal

// ⁡⁣⁣⁢Pembulatan Angka⁡ //
console.log(Math.round(3.6)); // untuk membulatkan ke atas atau ke bawah
console.log(Math.ceil(4.0000001)); // untuk membulatkan ke atas
console.log(Math.floor(3.9)); // untuk membulatkan ke bawah
console.log(Math.trunc(4.99999)); // untuk membulatkan ke nol

// ⁡⁣⁣⁢Random Number⁡ //
console.log(Math.round(Math.random() * 100)); //memunculkan angka random antara 0-100
