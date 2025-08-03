// Prototypal Inheritance = object dapat mewarisi properti dan method dari object lain

//disini kita ingin membuat object yang outputnya sedang makan

function Hewan(nama, jenis) {
  this.nama = nama;
  this.jenis = jenis;
}

Hewan.prototype.makan = function () {
  console.log(`${this.nama} sedang makan`);
};

let Kucing = new Hewan("Rocky", "Angora");
Kucing.makan();
