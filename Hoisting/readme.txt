                            Hoisting

JavaScript Hoisting mengacu pada proses di mana interpreter (penerjemah kode) seolah-olah memindahkan deklarasi fungsi, variabel, kelas, atau import ke bagian paling atas dari cakupannya, sebelum kode tersebut dieksekusi.

Cara Kerja Hoisting:

-Hoisting Variabel
    -Variabel yang dideklarasikan dengan var: Variabel ini di-hoist, tetapi pada awalnya nilainya diatur menjadi undefined di awal cakupannya. 
    Artinya, Anda bisa mengaksesnya sebelum dideklarasikan, tapi nilainya akan undefined.
    -Variabel yang dideklarasikan dengan let dan const: Variabel ini juga di-hoist, namun mereka berada dalam "zona mati temporal" (temporal dead zone) sejak awal cakupannya hingga nilai diberikan kepadanya. 
    Jika Anda mencoba mengaksesnya sebelum diberi nilai, akan terjadi error.

-Fungsi Hoisting
    - Deklarasi Fungsi: Deklarasi fungsi sepenuhnya di-hoist, yang berarti seluruh fungsi dipindahkan ke bagian atas cakupan.
    Ini memungkinkan Anda memanggil fungsi tersebut bahkan sebelum fungsi itu ditulis di kode.
    - Ekspresi Fungsi (termasuk arrow functions): Ekspresi fungsi tidak di-hoist dengan cara yang sama seperti deklarasi fungsi.
    Jadi, Anda tidak bisa menggunakannya sebelum fungsi tersebut didefinisikan dalam kode.

Hoisting adalah konsep penting untuk dipahami agar menghindari kesalahan yang tidak terduga, terutama saat bekerja dengan var, let, dan const.