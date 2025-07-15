//-------- SWAP THE VALUE OF TWO VARIABLE
let a = 1;
let b = 2;

[a, b] = [b, a]; // [a,b] = destructuring | [b,a] = array
console.log(a);
console.log(b);
//hasilnya 2 dan 1 bukan 1 dan 2 karena sudah di-destructuring

//------- SWAP 2 ELEMENTS IN ARRAY
const collors = ["Red", "Green", "Blue"];
[collors[0], collors[2]] = [collors[2], collors[0]];
console.log(collors);

//------- ASSIGN ARRAY TO VARIABLES (menetapkan array ke variabel)
const cars = ["BMW", "Honda", "Mercy", "Tesla", "Suzuki"];
const [firstCar, secondCar, thirdCar, ...ekstraCar] = cars;
console.log(firstCar);
console.log(ekstraCar);

//-------- EXTRACT VALUE FROM OBJECT
const person = {
  firstName: "Dadan",
  lastName: "Nurohman",
  age: 27,
  from: "Indonesia",
};

const person2 = {
  firstName: "Sponge",
  lastName: "Bob",
  age: 25,
  from: "BikiniBottoms",
};

const { firstName, lastName, age, from } = person; //data yg akan muncul dlm consol.log adalah yg ditaruh dalam destructing
console.log(firstName);

// -------- DESTRUCT IN FUNCTION IN PARAMETERS (pakai backtick)

function displayNama({ nama }) {
  console.log(`name: ${firstName}, ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`from: ${from}`);
}

const nama = {
  firstName: "Dadan",
  lastName: "Nurohman",
  age: 27,
  from: "Indonesia",
};

displayNama(nama);
