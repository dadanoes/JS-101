// Abstraction(abstraksi) = proses menyembunyikan detail implementasi dari pengguna, dan hanya menampilkan esensi atau fitur utama
class Binatang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }
}

class Kucing extends Binatang {
  constructor(nama, umur) {
    super(nama, umur);
  }
}

class Anjing extends Binatang {
  constructor(nama, umur) {
    super(nama, umur);
  }
}

const kucing = new Kucing("Kitty", 2);
const anjing = new Anjing("Doggy", 3);

console.log(kucing);
console.log(anjing);
