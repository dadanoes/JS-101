//======= OBJECT ========//

/* OBJECT LITERAL */
const mahasiswa1 = {
  nama: "Dadan Nurohman",
  umur: 27,
  email: "dans@gmail.com",
};
/* OBJECT CONSTRUCTOR */
function Mahasiswa(nama, umur, email) {
  this.nama = nama;
  this.umur = umur;
  this.email = email;
}

/* ========== METODE OBJEK ========= */
// Metode adalah fungsi yang dimiliki oleh object.

// 1. Menggunakan titik (dot notation)
console.log(mahasiswa1.nama);

// 2. Menggunakan notasi kurung (Bracket Notation)
console.log(mahasiswa1["umur"]);

/* ========== MENAMBAHKAN PROPERTI (NESTED OBJEK) ========= */
const user = {
  name: "Alice",
  age: 30,
  address: {
    // Ini adalah nested object
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  contacts: {
    // Ini juga nested object
    email: "alice@example.com",
    phone: "555-1234",
  },
};
console.log("contoh mengakses nested object", user.address.city); // Output: Anytown

/* ========== MENGUBAH NILAI PROPERTI OBJEK ========= */
// Mengubah nilai properti object
user.age = 28;
console.log("contoh mengubah umur user", user.age); // Output 28

/* ========== MENGHAPUS PROPERTI OBJEK ========= */
// Menghapus properti object
delete user.name;
console.log("ini contoh hapus properti object", user); // Output tidak ada properti name

/* ========== MEMERIKSA PROPERTI OBJEK ========= */
// Memeriksa apakah properti ada
console.log("age" in user); // true
console.log("works" in user); // false

/* ========== MENGAMBIL SEMUA PROPERTI OBJEK ========= */
// Menampilkan semua properti object
console.log(user);

/* =========== METODE PADA OBJEK ========== */

// 1. Metode start
let car = {
  brand: "Toyota",
  model: "Camry",
  start: function () {
    // Metode start
    console.log("The car has started.");
  },
};

car.start(); // Output: The car has started.

// 2. Metode stop
car.stop = function () {
  console.log("The car has stopped.");
};

car.stop(); // Output: The car has stopped.

// 3. Metode getInfo
car.getInfo = function () {
  return `This is a ${this.brand} ${this.model}.`;
};

console.log(car.getInfo()); // Output: This is a Toyota Camry.

// 4. Metode This
// Metode this adalah referensi ke objek saat ini.
let book = {
  title: "JavaScript Basics",
  author: "Anita",
  getSummary: function () {
    return `${this.title} by ${this.author}`;
  },
};

console.log(book.getSummary()); // Output: JavaScript Basics by Anita

// 5. Metode Arguments
// Arguments adalah array-like object yang berisi nilai-nilai argumen yang diteruskan ke fungsi saat fungsi tersebut dipanggil.
function introduce(name, age) {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}

let person = {
  name: "Dadan",
  age: 27,
};

introduce.call(person); // Output: Hi, my name is Dadan and I am 27 years old.

/* ===== MENGULANG PROPERTI OBJEK (Iterating Over Object Properties) ======== */
/* penting untuk menggunakan hasOwnProperty.call() (atau user.hasOwnProperty(key)) 
di dalam loop for...in untuk menghindari iterasi properti yang diwarisi
dari rantai prototipe objek. */

// 1. Menggunakan for...in loop
const user4 = {
  firstName: "Alice",
  lastName: "Smith",
  age: 30,
  city: "New York",
};

console.log("--- Menggunakan for...in ---");
for (const key in user4) {
  // Pastikan properti itu milik objek itu sendiri, bukan dari prototype chain
  if (Object.prototype.hasOwnProperty.call(user4, key)) {
    console.log(`Kunci: ${key}, Nilai: ${user4[key]}`);
  }
}
// 2. Menggunakan key, value, dan entries //
let colors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF" };
console.log(Object.keys(colors)); // Output: ["red", "green", "blue"]
console.log(Object.values(colors)); // Output: ["#FF0000", "#00FF00", "#0000FF"]
console.log(Object.entries(colors)); // Output: [["red", "#FF0000"], ["green", "#00FF00"], ["blue", "#0000FF"]]

/* ====== OBJEK FREEZE ======= */
// - menjadi imun, tidak bisa dirubah, dihapus, ditambah
const person7 = {
  name: "Anjali",
  age: 25,
};

Object.freeze(person7);

person.age = 30; // This will have no effect
person.city = "Mumbai"; // Cannot add new properties
delete person7.name; // Cannot delete properties

console.log(person7); // Output: { name: "Anjali", age: 25 }

/* ====== OBJEK SEAL ======= */
// - mencegah penambahan dan pengurangan, tetapi bisa memodifikasi

const car2 = {
  brand: "Honda",
  model: "Civic",
};

Object.seal(car2);

car2.model = "Accord"; // Allowed: Existing property modified
car2.year = 2020; // Not allowed: Cannot add new properties
delete car.brand; // Not allowed: Cannot delete properties

console.log(car2); // Output: { brand: "Honda", model: "Accord" }
