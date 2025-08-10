// Sebuah objek yang mewakili hasil akhir (berhasil atau gagalnya) dari sebuah operasi yang berjalan secara asinkron.

// 1. MEMBUAT PROMISE
// Fungsi ini mensimulasikan proses download data yang butuh waktu dan bisa gagal.
// Fungsi ini mengembalikan sebuah Promise.
// promise menggunakan 'Resolve' dan 'Reject'
const downloadData = (isSuccess) => {
  return new Promise((resolve, reject) => {
    console.log("Proses download dimulai...");

    // Simulasi proses asinkron dengan setTimeout selama 2 detik
    setTimeout(() => {
      if (isSuccess) {
        // Jika berhasil, Promise akan 'fulfilled' (terpenuhi)
        const data = { user: "Dadan Nurohman", id: 123 };
        resolve(`✅ Download berhasil! Data: ${JSON.stringify(data)}`);
      } else {
        // Jika gagal, Promise akan 'rejected' (ditolak)
        reject("❌ Koneksi internet terputus, download gagal!");
      }
    }, 2000);
  });
};

// 2. MENGGUNAKAN (CONSUMING) PROMISE

console.log("--- Skenario 1: Download Berhasil ---");
downloadData(true)
  .then((result) => {
    // .then() dijalankan jika Promise berhasil (resolve)
    console.log(result);
  })
  .catch((error) => {
    // .catch() dijalankan jika Promise gagal (reject)
    console.error(error);
  })
  .finally(() => {
    // .finally() akan selalu dijalankan, baik berhasil maupun gagal.
    console.log("Proses download untuk skenario 1 selesai.\n");
  });

// Kita beri jeda agar output console tidak tumpang tindih
setTimeout(() => {
  console.log("--- Skenario 2: Download Gagal ---");
  downloadData(false)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Proses download untuk skenario 2 selesai.");
    });
}, 4000); // Dijalankan setelah 4 detik
