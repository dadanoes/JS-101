// Getter & Setter
// Getter: mengambil nilai dari property
// Setter: menetapkan nilai baru ke property

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    // Getter
    return this.width * this.height;
  }

  set area(value) {
    // Setter
    console.log("Cannot directly set area!");
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // Output: 50
rect.area = 100; // Output: Cannot directly set area!
