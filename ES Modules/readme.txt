Modul JavaScript digunakan untuk memecah kode menjadi file-file kecil yang terpisah.

jika kita menggunakan Modul, kita bisa lebih selektif memilih bagian kode mana yang ingin kita ekspos

biasanya pembuatan file module menggunakan .mjs (opsional)

perbedaan non module dan module adalah cara kita me-load filenya, biasanya dituliskan type="module"

secara default, saat kita menggunakan Js Module, semua kode (function, var, class, dll) tidak akan diekspos keluar modul tsb
jika kita ingin mengeksposenya, kita harus memberitahukannya secara explicit

Export
● export merupakan kata kunci yang digunakan untuk mengekspos kode dari sebuah module
● export bisa ditambahkan diawal sebuah variable, function atau class

Import
● Export digunakan untuk mengekspos kode di module, jika kita ingin menggunakan kode yang sudah
di ekspos di module, kita bisa menggunakan kata kunci import
● Cara menggunakan kata kunci import adalah sebagai berikut :
import {namaFunction, namaVariable, NamaClass} from “lokasi-module.js”
● Module hanya bisa digunakan di module lain, jadi pastikan ketika membuat script, kita harus
menggunakan type module
● Saat menggunakan import, kita tidak perlu lagi menambahkan script module src satu per satu,
karena sudah di handle oleh Browser secara otomatis ketika menggunakan module

