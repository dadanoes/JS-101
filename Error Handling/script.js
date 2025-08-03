try {
  // Kode yang mungkin menimbulkan error
  let hasil = 10 / 0; // Pembagian dengan nol, di JS tidak error tapi menghasilkan Infinity
  let obj = undefined;
  console.log(obj.properti); // Ini akan menyebabkan TypeError
  console.log("Kode ini tidak akan dieksekusi jika ada error di atasnya");
} catch (error) {
  // Kode yang akan dieksekusi jika terjadi error di dalam blok try
  console.error("Terjadi kesalahan:", error.message); // Menampilkan pesan error
  console.error("Tipe error:", error.name); // Menampilkan nama/tipe error (misal: TypeError)
  // Anda bisa melakukan hal lain di sini, seperti:
  // - Menampilkan pesan kepada pengguna
  // - Mengirim log error ke server
  // - Mengatur ulang beberapa nilai
} finally {
  // Opsional: Kode di dalam blok finally akan selalu dieksekusi,
  // terlepas dari apakah ada error atau tidak.
  console.log("Blok finally selalu dijalankan.");
}

console.log("Program terus berjalan setelah try...catch.");
