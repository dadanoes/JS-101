                    append & append child

metode append: Menambahkan satu atau lebih string atau node DOM ke akhir sebuah elemen.
    - Content Types: Strings, DOM nodes, or a mix of both.

metode appendchild: Menambahkan satu node DOM tunggal ke akhir sebuah elemen.
    - Content Types: Only DOM nodes (no strings allowed).

Kapan Menggunakan append dan appendChild:
 - append: Ketika perlu menambahkan baik string maupun node (elemen HTML), atau saat menambahkan beberapa item sekaligus.
 - appendChild: Ketika hanya menambahkan satu node DOM tunggal dan memerlukan dukungan browser yang lebih luas (lebih kompatibel dengan browser lama).


append:
- fungsi: Menambahkan satu atau lebih node atau string ke DOM 
- Konten Diizinkan: menambahkan text string atau node DOM.
- Return Value: Returns undefined.
- Positioning: Menambahkan di akhir child node.
- Browser Support: Newer method (introduced in DOM Level 4).

append child:
- fungsi: Adds only one node to the DOM.
- Konten Diizinkan: Can add only DOM nodes.
- Return Value: Returns the appended node.
- Positioning: Menambahkan di akhir child node.
- Browser Support: Older method (supported in all browsers).

