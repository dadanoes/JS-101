let calculator = (a, b) => a / b;
console.log(calculator(10, 5));

// // contoh lain

const stopwatchModern = {
  name: "Stopwatch Modern",
  seconds: 0,

  start() {
    // Sintaks method yang lebih singkat
    // 1. Di sini, sama seperti sebelumnya, 'this' adalah objek 'stopwatchModern'.
    console.log(`${this.name} dimulai.`);
    //     // 2. Kita gunakan Arrow Function sebagai callback untuk setInterval.
    setInterval(() => {
      // 3. SOLUSI: Arrow function ini TIDAK memiliki konteks 'this'-nya sendiri.
      //    Sebaliknya, ia "meminjam" atau "mewarisi" nilai 'this' dari lingkup
      //    di luarnya, yaitu method 'start()'.
      // 4. Karena 'this' di dalam start() adalah 'stopwatchModern', maka 'this'
      //    di sini juga 'stopwatchModern'. Kode ini berjalan sempurna.
      this.seconds++;
      console.log(`${this.name} - Detik: ${this.seconds}`);
    }, 1000);
  },
};

stopwatchModern.start();
