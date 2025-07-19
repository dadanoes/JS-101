metode getAttribute dan setAttribute untuk memodifikasi atribut dari HTMLnya agar dinamis

- getAttribute : element.getAttribute(attributeName);
- element.setAttribute(attributeName, value);

## Poin Penting

* Gunakan `getAttribute` untuk mengambil nilai atribut sebenarnya dari HTML.
* Gunakan `setAttribute` untuk memodifikasi atau menambahkan atribut.
* Selalu utamakan menggunakan `removeAttribute` saat membersihkan atribut yang tidak diperlukan.
* Saat bekerja dengan atribut non-standar atau atribut `data-*`, `getAttribute` dan `setAttribute` sangatlah penting.
