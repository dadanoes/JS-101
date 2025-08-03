function faktorial(n) {
  //base case
  if (n == 0) {
    return 1;
  }
  // recursive case
  return n * faktorial(n - 1);
}
console.log(faktorial(5));
//penjelasan:
/* Base center: jika n sama dengan 0, function mengembalikan 1. (ini adalah fungsi dasar dari recursion) */
/* Recursive case: jika n tidak sama dengan 0, function mengalikan n dengan asil pemanggilannya dirinya sendiri,
(faktorial(n-1)). Dengan setiap pemanggilan nilai n berkurang 1 hingga 0. */
