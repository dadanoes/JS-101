//----------- Mengakses Array ------------//

//1. akses array
let fruitsNew = ["apple", "banana", "orange"]; // ⁡⁣⁢⁣mengakses array⁡
console.log("maka elemen array pertama:", fruitsNew[0]); // Output: "apple"
console.log("maka elemen array kedua:", fruitsNew[1]); // Output: "banana"

//2. mengubah elemen array
fruitsNew[1] = "mango";
console.log(fruitsNew); // Output: ["apple", "mango", "orange"]

//3. ⁡⁣⁢Menggunakan notasi array literal:⁡
let fruits = ["apple", "banana", "mango"];
console.log("ini array literal:", fruits); // [ 'apple', 'banana', 'mango' ]

//4. Menggunakan Array Constructor
let vegetables = new Array("carrot", "broccoli", "spinach");
console.log("ini array constructor:", vegetables); // [ 'carrot', 'broccoli', 'spinach' ]

// 5. Menggunakan Array.of() = mengubah number menjadi array
let numbers = Array.of(1, 2, 3, 4, 5);
console.log("ini array of:", numbers); // [ 1, 2, 3, 4, 5 ]

//6. Array.from() = mengubah string menjadi array
let str = "Hello";
let charArray = Array.from(str);
console.log(charArray);
