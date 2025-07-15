// ===== CALLBACK FUNCTION === //
function selesaikanTugas(tugas, callback) {
  //ini adalah HIFO
  console.log("Menyelesaikan tugas" + tugas);
  callback();
}
function tugasSelesai() {
  //ini adalah Callback function
  console.log("Tugas selesai");
}
selesaikanTugas("Belajar Js", tugasSelesai); //tugasSelesai dikirim sebagai argumen
