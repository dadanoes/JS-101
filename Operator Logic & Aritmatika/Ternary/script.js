// Operator Ternary
// (?) (jika true) (:) (jika false)
// condition? expressionIfTrue : expressionIfFalse;

// sederhana//
let a = 10;
let b = 5;
console.log(a > b ? "a lebih besar dari b" : "a tidak lebih besar dari b"); // a>b

//atau//
let age = 20;
let canVote = age >= 20 ? "can vote" : "can't vote"; // karena nilai agenya 20 sedangkan nilai perbandingannya >= 20 maka can vote (true)
console.log(canVote); //can vote (true)

//atau//
let age2 = 15;
let canVote2 = age2 >= 20 ? "can vote" : "can't vote"; // karena nilai agenya 15 sedangkan nilai perbandingannya < 20 maka can't vote (false)
console.log(canVote2); //can't vote (false)
