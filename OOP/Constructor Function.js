//Constructor Function memungkinkan kita membuat object dengan property dan method yg sama
function Mobil(Merek, Tipe, Tahun) {
  this.Merek = Merek;
  this.Tipe = Tipe;
  this.Tahun = Tahun;

  this.start = function () {
    console.log(`${(this, Merek)} dimulai`);
  };

  this.info = function () {
    console.log(`${(this, Merek)} ${(this, Tipe)} ${(this, Tahun)} `);
  };
}

let mobil1 = new Mobil("BMW", "M3", 2025);
let mobil2 = new Mobil("Toyota", "Avanza", 2020);
mobil1.start();
mobil2.info();
