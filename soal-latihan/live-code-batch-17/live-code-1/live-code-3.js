/*
=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:

contoh 1 (height = 3):
123
23
3

contoh 2 (height = 5):
12345
2345
345
45
5

contoh 3 (height = 1):
1

tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/

var height = 5;
var counter = 0
  for (var i = height; i > 0; i--) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row += j + counter
    } 
    counter++
    console.log(row);
  }