Didalam Js, kita bisa menaplikasikan style langsung kedalam HTML

## Tips untuk Menerapkan Gaya (Styles)
Inline styles (style property) berguna untuk styling dinamis dan sekali pakai.
CSS classes (className or classList) lebih baik untuk penggunaan ulang reusability dan kemudahan pemeliharaan maintainability
Utamakan stylesheet eksternal atau internal untuk styling yang konsisten dan dapat diskalakan scalable


metode:
1. style property
    - Properti `style` memungkinkan Anda untuk secara langsung memodifikasi atribut `style` dari sebuah elemen HTML.
    - Gunakan nama properti CSS dalam format camelCase alih-alih kebab-case (misalnya, `backgroundColor` sebagai ganti `background-color`).

2. class name property
    - Properti `className` memungkinkan Anda untuk mengubah nama kelas CSS dari elemen HTML.
    - Gunakan nama kelas CSS yang sudah ditentukan sebelumnya.

3. class list API
    - Properti `classList` memungkinkan Anda untuk mengakses daftar kelas CSS dari elemen HTML.
    - Gunakan metode-metode ini seperti `add`, `remove`, dan `toggle` untuk memodifikasi daftar kelas.

4. Inline Styles Dynamically
    - Anda dapat menambahkan beberapa gaya sekaligus menggunakan metode `setAttribute` untuk atribut `style`.

5. Styles via JavaScript-Generated CSS
    - Anda dapat membuat gaya CSS dinamis menggunakan JavaScript.
    - Gunakan metode `createElement` untuk membuat elemen baru, `appendChild` untuk menambahkan ke dalam dokumen, dan `setAttribute` untuk atribut `style`.

6. Combining Multiple Approaches
    - You can combine the style property, classList, and dynamic CSS creation for more flexibility.