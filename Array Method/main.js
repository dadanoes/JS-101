//~~~~~~~~~~~~ Array ~~~~~~~~~~~~//

//​‌‍‌⁡⁣⁢⁣ ===== metode arrays =====⁡​ //

// 1. ⁡⁣⁢⁣Menggunakan notasi array literal:⁡
let fruits = ["apple", "banana", "mango"];
console.log("ini array literal:", fruits); // [ 'apple', 'banana', 'mango' ]

// 2. Menggunakan Array Constructor
let vegetables = new Array("carrot", "broccoli", "spinach");
console.log("ini array constructor:", vegetables); // [ 'carrot', 'broccoli', 'spinach' ]

// ​‌‍‌⁡⁣⁢⁣3. Menggunakan Array.of() = mengubah number menjadi array⁡​⁡
let numbers = Array.of(1, 2, 3, 4, 5);
console.log("ini array of:", numbers); // [ 1, 2, 3, 4, 5 ]

// ⁡⁣⁢⁣​‌‍‌4. Menggunakan Array.from() =  mengubah string menjadi array​⁡
let str = "Hello";
let charArray = Array.from(str);
console.log(charArray); // [ 'H', 'e', 'l', 'l', 'o' ]

// ​‌‍‌⁡⁣⁢⁣====== Mengakses Array =====​⁡ //
let fruitsNew = ["apple", "banana", "orange"]; // ⁡⁣⁢⁣mengakses array⁡
console.log("maka elemen array pertama:", fruitsNew[0]); // Output: "apple"
console.log("maka elemen array kedua:", fruitsNew[1]); // Output: "banana"

// ⁡⁣⁢⁣​‌‍‌====== Mengubah elemen Array =====​ ⁡//
fruitsNew[1] = "mango";
console.log(fruitsNew); // Output: ["apple", "mango", "orange"] ⁡⁣⁢⁣mengubah banana menjadi mango⁡

//⁡⁣⁢⁣ ====== Array Methods & Properties (Metode & Properti Array) =======⁡ //

/* ​‌‍‌⁡⁣⁢⁣1. Push () = menambahkan satu atau lebih elemen baru ke urutan terakhir pada Array⁡​ */
let mobil = ["avanza", "Jazz", "Xenia"];
mobil.push("Civic");
console.log("ini Push:", mobil); // Output: iniPush : [ 'avanza', 'Jazz', 'Xenia', 'Civic' ]

/* ⁡⁣⁢⁣​‌‍‌2. Pop () = menghapus elemen terakhir dari Array​⁡ */
let mobil2 = ["avanza", "Jazz", "Xenia"];
mobil2.pop();
console.log("ini pop:", mobil2); // Output: ini pop : [ 'avanza', 'Jazz' ]

/* ⁡⁣⁢⁣​‌‍‌3. Shift () = menghapus elemen pertama dari Array​⁡ */
let mobil3 = ["avanza", "Jazz", "Xenia"];
mobil3.shift();
console.log("ini shift:", mobil3); // Output: [ 'Jazz', 'Xenia' ]

/* ⁡⁣⁢⁣​‌‍‌4. Unshift () = menambahkan elemen baru ke urutan awal pada Array​⁡ */
let mobil4 = ["avanza", "Jazz", "Xenia"];
mobil4.unshift("Civic");
console.log("ini unshift:", mobil4); // Output: ini unshift : [ 'Civic', 'avanza', 'Jazz', 'Xenia' ]

/* ⁡⁣⁢⁣​‌‍‌5. Concat () = menggabungkan dua buah array​⁡ */
let sayuran = ["carrot", "broccoli"];
let bring = mobil.concat(sayuran);
console.log("ini concat:", bring); // Output: ini concat : [ 'avanza', 'Jazz', 'Xenia', 'Civic', 'carrot', 'broccoli' ]

/* ⁡⁣⁢⁣​‌‍‌6. Slice () = Mengembalikan salinan dangkal sebagian dari sebuah array ke dalam array baru, berdasarkan indeks awal dan akhir (akhir tidak termasuk).​⁡ */
let angka = [1, 2, 3, 4, 5];
let sliced = angka.slice(1, 3);
console.log("ini slice:", sliced); // Output: ini slice : [2, 3]

/* ⁡⁣⁢⁣​‌‍‌7. Splice () = Menghapus elemen dari array dan/atau menggantinya dengan elemen lain.​⁡ */
numbers.splice(2, 1, 10); // pada elemen 2, hapus 1 elemen, dan ganti dengan 10 (mengganti)
numbers.splice(3, 1); //pada elemen ke-3 hapus 1 elemen (hanya menghapus)
console.log("ini splice:", numbers); // Output: ini splice : [1, 2, 10, 4, 5]

/* ⁡⁣⁢⁣​‌‍‌8. IndexOf () = Mengembalikan indeks pertama di mana elemen yang ditentukan ditemukan, atau -1 jika tidak ditemukan.​⁡ */
console.log("ini indexOf:", numbers.indexOf(10)); // Output: 2 indeks elemen 10 berada di index ke 2

/* ⁡⁣⁢⁣​‌‍‌9. LastIndexOf () = Mengembalikan indeks terakhir di mana elemen yang ditentukan ditemukan, atau -1 jika tidak ditemukan.​⁡ */
let items = [1, 2, 3, 4];
console.log("ini lastIndexOf:", items.lastIndexOf(2)); // Output: 1 indeks elemen 2 berada di index ke 1

/* ⁡⁣⁢⁣​‌‍‌10. Includes () = Memeriksa apakah array mengandung elemen tertentu.​⁡ */
let item = [1, 2, 3, 4];
console.log("ini includes:", item.includes(2)); // Output: true

/* ⁡⁣⁢⁣​‌‍‌11. Join () = Menggabungkan semua elemen array menjadi string.​⁡ */
let item2 = [1, 2, 3, 4];
console.log("ini join:", item2.join("")); // Output: 1234
//atau
console.log(item2.join("-")); // Output: "1-2-3-2"

/* ⁡⁣⁢⁣​‌‍‌12. Reverse () = Membalikkan urutan elemen-elemen array.​⁡ */
let item3 = [1, 2, 3, 4];
console.log("ini reverse:", item3.reverse()); // Output: [ 4, 3, 2, 1 ]

/* ⁡⁣⁢⁣​‌‍‌13. Sort () = Mengurutkan elemen-elemen dalam sebuah array di tempatnya dan mengembalikan array yang sudah diurutkan.​⁡ */
let item4 = ["Dadan", "Iqbal", "Edho", "Agam"];
console.log("ini sort:", item4.sort()); // Output: [ 'Agam', 'Dadan', 'Edho', 'Iqbal' ] Agam menjadi didepan

/* ⁡⁣⁢⁣​‌‍‌14. forEach () = Menjalankan fungsi callback pada setiap elemen array.​⁡ */
item4.forEach((name) => console.log("ini forEach:", name));
// Output:
// Agam
// Dadan
// Edho
// Iqbal

/* ⁡⁣⁢⁣​‌‍‌15. Map () = Membuat array baru dengan menjalankan fungsi callback pada setiap elemen array​⁡. */
let item5 = [1, 2, 3, 4];
console.log(
  "ini map:",
  item5.map((x) => x * 2) //elemen array dikali 2
); // Output: [ 2, 4, 6, 8 ]
//atau
let doubled = item5.map((num) => num * 2); //elemen array dikali 2
console.log(doubled); // Output: [4, 6, 4, 8]

/* ⁡⁣⁢⁣​‌‍‌16. Filter () = Membuat array baru dengan elemen-elemen yang memenuhi kondisi tertentu.​⁡ */
let item6 = [1, 2, 3, 4];
console.log(
  "ini filter:",
  item6.filter((x) => x > 2) //elemen yang lebih dari 2
); // Output: [ 3, 4 ]
//atau
let evenNumbers = item6.filter((num) => num % 2 === 0); //elemen array yang habis dibagi 2
console.log(evenNumbers); // Output: [4, 2]

/* ⁡⁣⁢⁣​‌‍‌17. Reduce () = Menerapkan sebuah fungsi terhadap sebuah akumulator dan setiap elemen dalam array, mereduksinya menjadi satu nilai.​⁡ */
let sum = item6.reduce((acc, cur) => acc + cur); //elemen array yang dijumlahkan, acc adalah accumulator dan cur adalah current value
console.log("ini adalah reduce:", sum); // Output: 10

/* ⁡⁣⁢⁣​‌‍‌18. ReduceRight () = Menerapkan sebuah fungsi terhadap sebuah akumulator dan setiap elemen dalam array, mereduksinya menjadi satu nilai, namun urutan iterasi dimulai dari kanan ke kiri.​⁡ */
let item7 = [1, 2, 3, 4];
let sumRight = item7.reduceRight((acc, cur) => acc + cur);
console.log("ini adalah reduceRight:", sumRight); // Output: 10

/* ⁡⁣⁢⁣​‌‍‌19. Some () = Memeriksa apakah setidaknya satu elemen dalam array memenuhi kondisi tertentu.​⁡ */
let item8 = [1, 2, 3, 4];
console.log(
  "ini adalah some:",
  item8.some((x) => x > 2)
); // Output: true

/* ⁡⁣⁢⁣​‌‍‌20. Every () = Memeriksa apakah setiap elemen dalam array memenuhi kondisi tertentu.​⁡ */
let item9 = [1, 2, 3, 4];
console.log(
  "ini adalah every:",
  item9.every((x) => x > 2) // setiap elemen harus lebih dari 2
); // Output: false

/* ⁡⁣⁢⁣​‌‍‌21. Find () = Mengembalikan elemen pertama dalam array yang memenuhi kondisi tertentu.​⁡ */
let item10 = [1, 2, 3, 4];
console.log(
  "ini adalah find:",
  item10.find((x) => x > 2) // elemen yang lebih dari 2
); // Output: 3

/* ⁡⁣⁢⁣​‌‍‌22. FindIndex () = Mengembalikan indeks elemen pertama dalam array yang memenuhi kondisi tertentu.​⁡ */
let item11 = [1, 2, 3, 4];
console.log(
  "ini adalah findIndex:",
  item11.findIndex((x) => x > 2) // elemen yang lebih dari 2
); // Output: 2

/* ⁡⁣⁢⁣​‌‍‌23. Fill () = Mengisi elemen-elemen array dengan nilai tertentu.​⁡ */
let item12 = [1, 2, 3, 4];
console.log(
  "ini adalah Fill: ",
  item12.fill("D", 3, 4) // elemen yang akan diisi, index awal, index akhir
); // Output: [1, 2, 3, D]

/* ⁡⁣⁢⁣​‌‍‌24. CopyWithin () = Menyalin elemen-elemen array ke posisi lain.​⁡ */
let item13 = [1, 2, 3, 4];
console.log(
  "ini adalah CopyWithin: ",
  item13.copyWithin(1, 2, 4) // elemen yang akan disalin, index awal, index akhir
); // Output: [1, 3, 4, 4]

/* ⁡⁣⁢⁣​‌‍‌25. Flat() = Membuat array baru dengan menggabungkan elemen-elemen array yang bersarang.​⁡ */
let nestedArr = [1, [2, [3, 4], 5]];
console.log("ini nested arr atau flatArr", nestedArr.flat(2)); // Output: [1, 2, 3, 4, 5]

/* ⁡⁣⁢⁣​‌‍‌26. FlatMap() = Memetakan setiap elemen menggunakan fungsi pemetaan, lalu meratakan hasilnya.​⁡ */
let numArr = [1, 2, 3];
let doubledArr = numArr.flatMap((n) => [n * 2]);
console.log("ini flatmap", doubledArr); // Output: [2, 4, 6]

/* ⁡⁣⁢⁣​‌‍‌27. Concat() = Menggabungkan dua atau lebih array menjadi satu array baru.​⁡ */
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log("ini concat", arr1.concat(arr2)); // Output: [1, 2, 3, 4, 5, 6]

// ⁡⁣⁢⁣​‌‍‌============ LOOPING MELALUI ARRAY ========== ​⁡//
// - melakukan perulangan melalui elemen array menggunakan loop seperti for, for...of, forEach, etc.

let fruits10 = ["apple", "banana", "orange"];

/* ⁡⁣⁢⁣​‌‍‌1. Using for loop​⁡ */
for (let i = 0; i < fruits10.length; i++) {
  // i = index, fruits10.length = panjang array, i++ = increment
  console.log("ini for loop", fruits10[i]);
}

/* ⁡⁣⁢⁣​‌‍‌2. Using forEach method​⁡ */
fruits10.forEach(function (fruit) {
  // fungsi callback
  console.log(fruits10); // Output: apple, banana, orange
});

/* ​‌‍‌⁡⁣⁢⁣3. Using for...of loop⁡​ */
for (let fruit of fruits10) {
  console.log("ini for of", fruit); // Output: apple, banana, orange
}

// ⁡⁣⁢⁣​‌‍‌============ NESTED ARRAY (ARRAY BERISI ARRAY) ==========​⁡ //
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 3 baris dan 3 kolom
console.log("ini maxtrix/nested array:", matrix[1][2]); // Output: 6

//
