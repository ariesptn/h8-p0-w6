/**
  Vowels Counter Recursive

  Diberikan sebuah function consonantCounterRecursive(sentences) yang menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.

- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX

*/

function consonantCounterRecursive(sentences) {
  if (!sentences.length) {
    return 0
  }
  let vowels = 'aeiou'
  let firstLetter = sentences[0].toLowerCase()
  let isVowel = false
  for (s of vowels) {
    if (s === firstLetter) {
      isVowel = true
      break
    }
  }
  if (!isVowel && firstLetter.codePointAt(0) >= 97 && firstLetter.codePointAt(0) <= 122) {
    return 1 + consonantCounterRecursive(sentences.substring(1))
  }
  else {
    return consonantCounterRecursive(sentences.substring(1))
  }
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //13
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3

// if (sentences.length === 0) {
//   return 0;
// }
// else {
//   var lowCase = sentences.toLowerCase();
//   // console.log(lowCase);
//   var firstWord = lowCase[0]; 
//   // console.log(firstWord);

//   var modifSentences = lowCase.substring(1);
//   // console.log(modifSentences);

//   var consonant = 'bcdfghjklmnpqrstvwxyz'; 
//   for (var i=0; i<consonant.length; i++) {  // KENAPAA GA BISA di LOOP???
//     // console.log(consonant[i], i);

//     if (firstWord !== consonant[i]) {
//       // console.log(consonant[i]);

//       return 1 + consonantCounterRecursive(modifSentences);
//     }
//     else {
//       return 0 + consonantCounterRecursive(modifSentences); // kenapa return 0 ga bisa??
//     }
//   }  
