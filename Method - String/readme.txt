String adalah tipe data primitif untuk merepresentasikan teks
String diapit dengan tanda petik tunggal ('') atau ganda ("")
String tidak bisa diubah nilainya

// mengakses karakter string, str[(1)] *dihapus () dan terserah diganti angka didalamnya
- Mengakses karakter dalam String
- setiap karakter dalam string memiliki index
- index dimulai dari 0
- untuk mengakses karakter, gunakan tanda kurung siku []

// str.length
- Mengetahui panjang string dengan property length
- property length menghitung banyak karakter dalam string termasuk spasi

// str.toUpperCase()
- mengubah semua karakter menjadi kapital

// str.toLowerCase()
- mengubah semua karakter menjadi huruf kecil

// str.trim()
- menghilangkan spasi di awal dan di akhir

// str2.replaceAll(" ", "")
- menghilangkan spasi di tengah

// str2.replaceAll("a", "")
- menghilangkan karakter tertentu

// str.concat()
- menggabungkan dua string
- tidak mengubah string asli
- menghasilkan string baru

// str.slice()
- mengambil sebagian string
- tidak mengubah string asli
- menghasilkan string baru

// str.split()
- memotong string menjadi array
- tidak mengubah string asli
- menghasilkan array baru

// str.replace()
- mengganti bagian dari string dengan bagian string baru

// str.join()
- menggabungkan array menjadi string

//index.Of()
- mengembalikan index dari kemunculan pertama substring dalam string, atau -1 jika tidak ditemukan

//lastIndexOf()
- mengembalikan index dari kemunculan terakhir subsring dalam string 

//includes()
- mengembalikan true jika string mengandung substring yang ditentukan, sebaliknya false

// startsWith()
- Memeriksa apakah sebuah string dimulai dengan substring tertentu.
- jika ada berarti True, sebaliknya false

// endsWith()
- Memeriksa apakah sebuah string diakhiri dengan substring tertentu.
- jika ada berarti True, sebaliknya false

// search()
- Fungsi: Mencari kecocokan untuk ekspresi reguler (regular expression) di dalam sebuah string.
- Hasil:
       - Mengembalikan indeks kemunculan pertama kecocokan.
       - Mengembalikan -1 jika tidak ada kecocokan.
- Catatan: Ini jauh lebih kuat untuk pencarian pola yang kompleks dibandingkan metode di atas.