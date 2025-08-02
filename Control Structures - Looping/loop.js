// 1. for loop
// menjalankan blok kode sebanyak jumlah yang ditentukan.
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}
//- **`let i = 0`**: Menginisialisasi variabel `i`.
//- **`i < 5`**: Kondisi agar *loop* tetap berjalan (sampai `i` kurang dari 5).
//- **`i++`**: Menambah nilai `i` sebesar 1 setelah setiap iterasi.

// 2. while loop
// menjalankan blok kode selama kondisi yang ditentukan masih benar.
let j = 0;
while (j < 5) {
  console.log(j); // Output: 0, 1, 2, 3, 4
  j++;
}
//- **`let j = 0`**: Menginisialisasi variabel `j`.
//- **`j < 5`**: Kondisi agar *loop* tetap berjalan (sampai `j` kurang dari 5).
//- **`j++`**: Menambah nilai `j` sebesar 1 setelah setiap iterasi.

// 3. do-while loop
// menjalankan blok kode setidaknya sekali,
// lalu memeriksa kondisi setelah setiap iterasi.
let k = 0;
do {
  console.log(k); // Output: 0, 1, 2, 3, 4
  k++;
} while (k < 5);
//- **`let k = 0`**: Menginisialisasi variabel `k`.
//- **`k < 5`**: Kondisi agar *loop* tetap berjalan (sampai `k` kurang dari 5).
//- **`k++`**: Menambah nilai `k` sebesar 1 setelah setiap iterasi.

// 4. For...of Loop
// digunakan untuk melakukan iterasi atas elemen-elemen dalam sebuah array atau objek iterable lainnya.
let iterable = [1, 2, 3, 4, 5];
for (let value of iterable) {
  console.log(value); // Output: 1, 2, 3, 4, 5
}
//- **`let value of iterable`**: `value` akan mengambil nilai-nilai dari `iterable` secara berurutan.
//- **`value`**: Variabel yang digunakan untuk menyimpan nilai-nilai dari `iterable` secara berurutan.

// 5. For...in Loop
// digunakan untuk melakukan iterasi atas properti-properti dari sebuah objek.
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key); // Output: a, b, c
}
//- **`let key in obj`**: `key` akan mengambil properti-properti dari `obj` secara berurutan.
//- **`key`**: Variabel yang digunakan untuk menyimpan properti-properti dari `obj` secara berurutan.
//- **`obj[key]`**: Mengakses nilai dari properti `key` dalam objek `obj`.
