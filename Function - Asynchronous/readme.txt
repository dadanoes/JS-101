Asynchronous JavaScript adalah paradigma pemrograman yang memungkinkan eksekusi kode non-blocking.
Ini artinya, program dapat terus menjalankan operasi lain sambil menunggu tugas-tugas seperti panggilan API, penanganan file, atau timer selesai.

Kenapa menggunakan Asynchronous:
- Efisiensi: Operasi non-blocking menghindari pembekuan (tidak responsifnya) UI (Antarmuka Pengguna) di aplikasi web.
- Konkurensi: Memungkinkan beberapa tugas berjalan secara bersamaan, sehingga meningkatkan kinerja.

Async Method:

● setTimeout(callback, timeInMilis), digunakan untuk menjalankan proses Async sekali dalam waktu
tertentu.

● setInterval(callback, timeInMilis), digunakan untuk menjalankan proses Async secara periodik
dalam waktu tertentu.

               Promise Js

Promise dalam JavaScript itu seperti penampung untuk sebuah nilai yang nantinya akan diketahui. 
Nilai ini bisa berupa hasil yang berhasil atau kesalahan.
Awalnya, promise ini berada dalam status "pending" (menunggu). 
Setelah operasinya selesai, promise ini akan berubah menjadi "fulfilled" (berhasil) atau "rejected" (gagal/error).

Status-status sebuah Promise:
 - Pending (Menunggu): Promise masih dalam proses (operasi belum selesai).
 - Fulfilled (Terpenuhi/Berhasil): Operasi telah berhasil diselesaikan, dan promise memiliki hasil.
 - Rejected (Ditolak/Gagal): Operasi telah gagal, dan promise memiliki kesalahan atau alasan kegagalan.

Promise State:
State:           pending        fulfilled           rejected
Result:          undifined      value               error

Promise dibuat untuk terhindar dari masalah "Callback Hell", 
situasi dimana fungsi callback terlalu banyak dan bersarang (nested) didalam satu sama lain