                            Promise Js

Promise dalam JavaScript itu seperti penampung untuk sebuah nilai yang nantinya akan diketahui. Nilai ini bisa berupa hasil yang berhasil atau kesalahan.
Awalnya, promise ini berada dalam status "pending" (menunggu). Setelah operasinya selesai, promise ini akan berubah menjadi "fulfilled" (berhasil) atau "rejected" (gagal/error).

Status-status sebuah Promise:
 - Pending (Menunggu): Promise masih dalam proses (operasi belum selesai).
 - Fulfilled (Terpenuhi/Berhasil): Operasi telah berhasil diselesaikan, dan promise memiliki hasil.
 - Rejected (Ditolak/Gagal): Operasi telah gagal, dan promise memiliki kesalahan atau alasan kegagalan.

Promise ada di Function Async