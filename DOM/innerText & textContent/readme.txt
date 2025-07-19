Perbedaan Antara `innerText` dan `textContent` dalam JavaScript
Baik `innerText` maupun `textContent` adalah properti yang digunakan untuk mengambil atau mengatur konten teks dari sebuah elemen, namun keduanya berperilaku berbeda.

1. innerText
Definisi: Mengembalikan teks yang **terlihat** dari sebuah elemen, dengan mempertimbangkan gaya CSS (seperti `display: none`, `visibility`, dll.) dan mengabaikan elemen yang tersembunyi.
Performa: Lebih lambat dibandingkan `textContent` karena melibatkan perhitungan tata letak dan menghormati proses rendering halaman.
Spasi Kosong (Whitespace): Menggabungkan beberapa spasi menjadi satu spasi tunggal dan tidak menyertakan teks yang tersembunyi.
Penggunaan: Lebih baik untuk skenario di mana Anda hanya menginginkan teks yang terlihat dari sebuah elemen.

2. textContent
Definisi: Mengembalikan konten teks mentah dari sebuah elemen, termasuk teks yang tersembunyi.
Performa: Lebih cepat karena tidak memicu reflow atau mempertimbangkan gaya yang dirender (ditampilkan).
Spasi Kosong (Whitespace): Mempertahankan teks apa adanya di dalam DOM, termasuk spasi ekstra dan baris baru.
Penggunaan: Terbaik saat Anda menginginkan semua teks (yang terlihat dan tersembunyi) dari sebuah elemen atau saat performa sangat penting.