function sum(name, ...data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  console.log(`total ${name} adalah: ${total}`);
}
sum("Dadan", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
