Spread Parameter
Fungsi utamanya adalah memungkinkan Anda untuk menguraikan atau menyebarkan elemen-elemen dari sesuatu yang bisa diulang (seperti array atau objek) menjadi elemen-elemen tunggal.
Ini sering digunakan dalam berbagai situasi, termasuk:
    - Memanipulasi array: Misalnya, menggabungkan array atau menyalinnya.
    - Mengkloning objek: Membuat salinan objek.
    - Argumen fungsi: Meneruskan elemen-elemen array sebagai argumen terpisah ke sebuah fungsi.

Rest Parameter ()
fitur dimana kita bisa mengirim data sebanyak banyaknya pada satu parameter, secara otomatis akan dikonversi menjadi array
Ciri-ciri Utama (Rest Parameters):
    - Harus menjadi parameter terakhir: Rest parameter harus diletakkan paling akhir dalam daftar parameter sebuah fungsi.
    - Mengumpulkan sisa argumen: Fungsinya adalah mengumpulkan semua argumen yang tersisa yang diteruskan ke fungsi menjadi sebuah array.
    - Berguna saat jumlah argumen tidak diketahui: Rest parameters sangat membantu ketika Anda tidak tahu sebelumnya berapa banyak argumen yang akan diberikan ke sebuah fungsi.
- Rest parameter sangat ideal ketika Anda bekerja dengan fungsi-fungsi yang mungkin perlu menerima jumlah argumen yang tidak terbatas dan ketika Anda ingin bekerja dengan argumen-argumen tersebut sebagai sebuah array.


Perbedaan Rest Parameter dan Spread Parameter:
- Rest Parameters digunakan dalam definisi fungsi untuk mengumpulkan semua argumen menjadi sebuah array.
- Spread Operator digunakan untuk menyebarkan elemen-elemen ke dalam sebuah array atau objek, atau sebagai argumen untuk sebuah fungsi.