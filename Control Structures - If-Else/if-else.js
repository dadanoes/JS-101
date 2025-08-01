/* IF ELSE STATEMENT */
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

/* IF-ELSE-IF STATEMENT */
const angka = 30;
if (angka >= 80) {
  console.log("anda mendapatkan A");
} else if (angka >= 70) {
  console.log("anda mendapatkan B");
} else if (angka >= 60) {
  console.log("anda mendapatkan C");
} else {
  console.log("anda tidak lulus");
}

/* NESTED IF-ELSE (IF-ELSE BERTINGKAT) STATEMENT */
let nilai2 = 80;
let kehadiran = 70;
if (nilai2 >= 75) {
  if (kehadiran >= 70) console.log("anda lulus"); //22nya true
} else {
  console.log("anda tidak lulus"); // 1 true, 2 false
}

/* SWITCH CASE STATEMENT */
let nilai3 = 80;
switch (nilai3) {
  case 80:
    console.log("anda mendapatkan A");
    break;
  case 70:
    console.log("anda mendapatkan B");
    break;
  case 60:
    console.log("anda mendapatkan C");
    break;
  default:
    console.log("anda tidak lulus");
}

/* TERNARY STATEMENT */
let nilai4 = 80;
let hasil = nilai4 >= 70 ? "anda lulus" : "anda tidak lulus";
console.log(hasil);

// challenge
/* Buatlah sebuah script menggunakan if-else yang memeriksa 
sebuah angka apakah angka tersebut positif, negatif, atau nol, 
dan apakah angka tersebut genap atau ganjil. */
//- perhatikan clue (angka genap habis dibagi 2 ( % 2 == 0))

let angka1 = 3;
if (angka1 > 0) {
  console.log("angka positif");
} else if (angka1 < 0) {
  console.log("angka negatif");
} else {
  console.log("angka nol");
}
if (angka1 % 2 == 0) {
  console.log("angkanya genap");
} else {
  console.log("angkanya ganjil");
}
