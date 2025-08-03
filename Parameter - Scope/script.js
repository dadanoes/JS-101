//global scope
let counter = 0;
//function hit me: global scope
function hitme() {
  //local scope hit me
  counter++;
}
//function other: global scope
function other() {
  //local scope other
}
hitme();
hitme();
console.log(counter); //2 karena function hitme dijalankan 2 kali
