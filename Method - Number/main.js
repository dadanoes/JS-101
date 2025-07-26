//~~~~~~~~~~~~ ⁡⁢⁣⁢​‌‌‍‍𝗡𝗨𝗠𝗕𝗘𝗥​⁡ ~~~~~~~~~~~~//

// angka = number (num)
// bilangan bulat = interger (int)
// pecahan = float (decimal)
// tak hingga = infinity
// NaN = Not a Number

//=========== ⁡⁢⁣⁢𝗣𝗘𝗡𝗨𝗟𝗜𝗦𝗔𝗡 𝗡𝗨𝗠𝗕𝗘𝗥⁡ =========//
let bilanganBulat = 17;
let bilanganDecimal = 17.5;
let infinity = 1 / 0;
let notANumber = Number("17a");
console.log(notANumber); //NaN

//============ ⁡⁢⁣⁢𝗣𝗥𝗢𝗣𝗘𝗥𝗧𝗜 𝗣𝗔𝗗𝗔 𝗡𝗨𝗠𝗕𝗘𝗥⁡ =========//

// ⁡⁢⁣⁣1. Number.MAX_VALUE⁡
console.log(Number.MAX_VALUE);

// ⁡⁣⁢⁡⁢⁣⁡⁢⁣⁣2. Number.MIN_VALUE⁡
console.log(Number.MIN_VALUE);

// ⁡⁣⁢⁡⁢⁣⁡⁢⁣⁣3. Number.POSITIVE_INFINITY⁡
console.log(Number.POSITIVE_INFINITY);

// ⁡⁢⁣⁣4. Number.NEGATIVE_INFINITY⁡
console.log(Number.NEGATIVE_INFINITY);

// ⁡⁣⁢⁡⁢⁣⁡⁢⁣⁣5. Number.NaN⁡
console.log(Number.NaN);

//============ ⁡⁢⁣⁢𝗠𝗘𝗧𝗢𝗗𝗘 𝗕𝗔𝗪𝗔𝗔𝗡 𝗡𝗨𝗠𝗕𝗘𝗥⁡ ==============//

// ⁡⁣⁣⁡⁢⁣⁣1. toString(), Mengubah Angka menjadi string⁡
let num = 732.9;
let str = num.toString();
console.log(str, typeof str);
// ⁡⁢⁣⁣2. toFixed(digits), Mengubah angka menjadi string dengan jumlah digit desimal yang ditentukan.⁡
let floating = 3.124824;
console.log(floating.toFixed(4), typeof floating.toFixed(4));
// ⁡⁢⁣⁣3. toPrecision(digits), Mengubah angka menjadi string dengan panjang total yang ditentukan.⁡
let float = 3.14289;
console.log(float.toPrecision(5));
// ⁡⁢⁣⁣4. parseInt() dan parseFloat(), Mengubah string menjadi angka integer atau floating point.⁡
let str2 = "123.7";
let int = parseFloat(str2);
console.log(int);
