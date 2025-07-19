// ​‌‌‍‍⁡⁢⁢⁢⁡⁢⁣⁢𝗦𝗧𝗥𝗜𝗡𝗚​⁡

// ​‌‍‌⁡⁢⁣⁣=========== ‍‍‍𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗦𝗧𝗥𝗜𝗡𝗚 ===============⁡​ //

// ‍⁡⁣⁢⁣Single Quote⁡
let singleQuote = "Hello World";
console.log(singleQuote); // Hello World

// ⁡⁣⁢⁣Double Quote⁡
let doubleQuote = "Hello World";
console.log(doubleQuote); // Hello World

// ⁡⁣⁢⁣Backtick⁡
let backtick = `Hello World`;
console.log(backtick); // Hello World

// ⁡⁢⁣⁣​‌‍‌=========== ‍‍𝗠𝗘𝗡𝗚𝗔𝗞𝗦𝗘𝗦 𝗞𝗔𝗥𝗔𝗞𝗧𝗘𝗥 𝗗𝗔𝗟𝗔𝗠 𝗦𝗧𝗥𝗜𝗡𝗚 ===============​⁡ //

// ⁡⁣⁢⁣STR()⁡ mengambil karakter dalam string
let str = "Dadan Nurohman";
console.log(str[1]); //output a : D=0, a=1

// ​‌‍‌⁡⁢⁣⁣=========== 𝗣𝗥𝗢𝗣𝗘𝗥𝗧𝗬 𝗗𝗔𝗡 𝗠𝗘𝗧𝗛𝗢𝗗 𝗗𝗔𝗟𝗔𝗠 𝗦𝗧𝗥𝗜𝗡𝗚 ===============⁡​ //

// ⁡⁣⁢⁣LENGTH()⁡ menghitung karakter dalam string
console.log(str.length); //output 14

// ⁡⁣⁢⁣TOUPPERCASE()⁡ menjadikan semua karakter menjadi kapital
console.log(str.toUpperCase()); //output DADAN NUROHMAN

// ⁡⁣⁢⁣TOLOWERCASE()⁡ menjadikan semua karakter menjadi huruf kecil
console.log(str.toLowerCase()); //output dadan nurohman

// ⁡⁢⁣⁣​‌‍‌=========== 𝗠𝗔𝗡𝗜𝗣𝗨𝗟𝗔𝗦𝗜 𝗦𝗧𝗥𝗜𝗡𝗚 ===============​⁡ //

// ⁡⁣⁢⁣CONCATE (penggabungan)⁡

// 1. menggabungkan 2 string (memakai $ lebih disukai)
let fistName = "Dadan";
let lastName = "Nurohman";
console.log(`Nama saya: ${fistName} ${lastName}`); //output Dadan Nurohman
// 2. menggabungkan 2 string dengan menggunakan operator +
console.log("Nama saya: " + fistName + " " + lastName); //output Dadan Nurohman

// ⁡⁣⁢⁣TRIM() ⁡menghilangkan spasi di awal dan di akhir (TRIM)
let str2 = "    Dadan Nurohman    ";
console.log(str2.trim()); //output Dadan Nurohman

// ⁡⁣⁢⁣REPLACE()⁡ menghilangkan karakter tertentu
console.log(str2.replace(" ", "")); //output DadanNurohman

// ⁡⁣⁢⁣REPLACEALL() ⁡menghilangkan semua karakter tertentu(REPLACEALL)
console.log(str2.replaceAll("a", "")); //output Ddn Nurohmn

// ⁡⁣⁢⁣SLICE()⁡ mengambil karakter tertentu
let text = "Dadan";
console.log(text.slice(0, 2)); //output Da (mengambil 2 huruf awal)

// ⁡⁣⁢⁣SPLIT()⁡ memecah string menjadi array
const testString = "Test-Array-di-String";
console.log(testString.split("-", 3)); //output ["Test", "Array", "di"]

// ⁡⁣⁢⁣REPLACE()⁡ mengganti bagian string dengan bagian string baru
let namaAsli = "Dadan Nurohman";
console.log(namaAsli.replace("Dadan", "javascript")); //output javascript Nurohman mengganti Dadan dengan javascript

// ⁡⁣⁢⁣STR.JOIN()⁡ menggabungkan array menjadi string
let array = ["Dadan", "Nurohman"];
console.log(array.join(" ")); //output Dadan Nurohman

// ⁡⁢⁣⁣​‌‍‌=========== 𝗣𝗘𝗡𝗖𝗔𝗥𝗜𝗔𝗡 𝗗𝗔𝗟𝗔𝗠 𝗦𝗧𝗥𝗜𝗡𝗚 ===============​⁡ //

// ⁡⁣⁢⁣INDEX.OF()⁡ mencari index karakter
let sentense = "Hokage Naruto Uzumaki";
let index = sentense.indexOf("Naruto");
console.log(index); //output 7

// ⁡⁣⁢⁣LASTINDEX.OF()⁡ mencari index karakter dari belakang
let sentense2 = "The Quick Lazy Fox";
let index2 = sentense2.lastIndexOf("Lazy");
console.log(index2); //10

// ⁡⁣⁢⁣INCLUDES()⁡ mengecek true jika string mengandung karakter tertentu, sebaliknya false
let sentense3 = "The Quick Lazy Fox";
let exist = sentense3.includes("Lazy");
console.log(exist); //output true

// ⁡⁣⁢⁣STARTSWITH()⁡ mengecek apakah string diawali dengan karakter tertentu
let sentense4 = "The Quick Lazy Fox";
let startWith = sentense4.startsWith("The");
console.log(startWith); //output true

// ⁡⁣⁢⁣ENDSWITH()⁡ mengecek apakah string diakhiri dengan karakter tertentu
let sentense5 = "The Quick Lazy Fox";
let endWith = sentense5.endsWith("Fox");
console.log(endWith); //output true

// ⁡⁣⁢⁣SEARCH()⁡ Mencari kecocokan untuk ekspresi reguler (regular expression) di dalam sebuah string.
let dataProduk = "Kode produk: ABC123DEF, Harga: 50000.";
// Mencari deretan angka (misal, kode produk)
let posisiAngka = dataProduk.search(/\d+/);
console.log(posisiAngka); // Output: 11 (indeks '1' dari "123")
