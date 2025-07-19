// contoh sederhana:
let calculator = (a, b) => a / b;
console.log(calculator(10, 5));

// contoh lain:
const stopwatchModern = {
  name: "Stopwatch Modern",
  seconds: 0,

  start() {
    // 1. Di sini, sama seperti sebelumnya, 'this' adalah objek 'stopwatchModern'.
    console.log(`${this.name} dimulai.`);
    // 2. Kita gunakan Arrow Function sebagai callback untuk setInterval.
    setInterval(() => {
      this.seconds++;
      console.log(`${this.name} - Detik: ${this.seconds}`);
    }, 1000);
  },
};
stopwatchModern.start();
