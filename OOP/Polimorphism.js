// Polimorphism = menggunakan method yg sama pada object yg berbeda

class Binatang {
  speak() {
    console.log("Binatang bersuara:");
  }
}

class Kucing extends Binatang {
  speak() {
    super.speak(); //super.speak() adalah method dari class Binatang
    console.log("MEOOOOOOOOOOOOONGGG");
  }
}

class Anjing extends Binatang {
  speak() {
    console.log("ANJIIINNGGGG");
  }
}

const kucing = new Kucing();
const anjing = new Anjing();
kucing.speak();
anjing.speak();
