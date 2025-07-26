// ‍============ LOOPING MELALUI ARRAY ========== //
// - melakukan perulangan melalui elemen array menggunakan loop seperti for, for...of, forEach, etc.

let fruits10 = ["apple", "banana", "orange"];

// 1. Using for loop
for (let i = 0; i < fruits10.length; i++) {
  // i = index, fruits10.length = panjang array, i++ = increment
  console.log("ini for loop", fruits10[i]);
}

// 2. Using forEach method
fruits10.forEach(function (fruit) {
  // fungsi callback
  console.log(fruits10); // Output: apple, banana, orange
});

// 3. Using for...of loop
for (let fruit of fruits10) {
  console.log("ini for of", fruit); // Output: apple, banana, orange
}

// ‍============ NESTED ARRAY (ARRAY BERISI ARRAY) ========== //
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 3 baris dan 3 kolom
console.log("ini maxtrix/nested array:", matrix[1][2]); // Output: 6
