// ========================= PENGHANCURAN OBJEK ====================== //

// 1. Basic Sintax (sintak sederhana)
// - mengambil data dari object
const namaOrang = {
  name: "John Doe",
  age: 30,
  occupation: "Developer",
};

// Destructuring
const { name, age } = namaOrang;

console.log(namaOrang); // Output: John Doe
console.log(age); // Output: 30

// 2. Mengganti nama variabel dari objek
// - mengganti nama variabel saat melakukan destructuring menggunakan sintaks :.
const person = {
  name: "marcelo",
  age: 12,
};

const { name: fullName, age: years } = person; // perubahan dari name jadi fullName, age menjadi years

console.log(fullName); // Output: marcelo
console.log(years); // Output: 12

// 3. Default Values
// - menetapkan nilai default kepada variabel jika properti tidak ada

let siswa = {
  nama: "Agus",
};
const { nama, umur = 20 } = siswa;
console.log(nama); // Output = Agus
console.log(umur); // Output = 20 (default var)

// 4. Nested Objek Deskontrusi (Nested Object Desctructuring)
// - mengakses properti dari objek yang berada didalam objek

const userProfile = {
  id: 123,
  info: {
    firstName: "Budi",
    lastName: "Santoso",
    contact: {
      email: "budi@example.com",
      phone: "08123456789",
    },
  },
  settings: {
    theme: "dark",
    notifications: true,
  },
};

// Penggunaan Nested Object Destructuring
const {
  id,
  info: {
    // Destructure 'info'
    firstName,
    lastName,
    contact: {
      // Destructure 'contact' di dalam 'info'
      email,
      phone,
    },
  },
  settings: {
    // Destructure 'settings'
    theme,
  },
} = userProfile;

console.log(id); // Output: 123
console.log(firstName); // Output: Budi
console.log(lastName); // Output: Santoso
console.log(email); // Output: budi@example.com
console.log(phone); // Output: 08123456789
console.log(theme); // Output: dark
// console.log(info);    // Error: info is not defined (karena info di-destructure menjadi properti di dalamnya)

// 5. Menggunakan Rest Syntax
// - untuk mengakses sisa properti yang tidak di-destructure
const person2 = {
  namanya: "John",
  age: 27,
  occupation: "Developer",
};

const { namanya, ...rest } = person2;

console.log(namanya); // Output: John
console.log(rest); // Output: { age: 27, occupation: 'Developer' }

// 6. Destructuring in Function Parameters (Destructing di parameter fungsi)
// -

const mahasiswa = {
  namaMahasiswa: "Ridho",
  age: 23,
};

function greet({ namaMahasiswa, age }) {
  console.log(`Hello, my name is ${namaMahasiswa} and I am ${age} years old.`);
}

greet(mahasiswa); // Output: Hello, my name is Ridho and I am 23 years old.

// 7. Dynamic Property Keys
// - menggunakan destructuring dengan properti yang dinamik
const key = "brand";
const mobil = {
  brand: ["BMW", "Honda"],
  tipe: "SUV",
};

const { [key]: value } = mobil;

console.log(value); // Output:
