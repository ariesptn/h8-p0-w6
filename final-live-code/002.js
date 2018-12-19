/*
===============
Shortest Word
===============

[INSTRUCTIONS]
shortestWords adalah sebuah function yang menerima satu parameter berupa string,
di mana string tersebut adalah sebuah kalimat dengan rangkaian kata-kata.
function akan mereturn sebuah array yang terdiri dari kata dengan jumlah huruf paling sedikit di kalimat tersebut.

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan indexOf, match, reduce, map dan regex

[EXAMPLE]
input: Do you want to become a great coder.
proses: panjang kata paling sedikit dalam kalimat tersebut: 1, maka akan mencari kata dengan huruf tersebut
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
proses: panjang kata paling sedikit dalam kalimat tersebut: 3, maka akan mencari kata dengan huruf tersebut
output: ['you', 'it!']
*/

function shortestWords(words) {
  let wordsSplit = words.split(' ')
  let lowest = wordsSplit[0].length
  for (let i = 0; i < wordsSplit.length; i++) {
    if (wordsSplit[i].length < lowest) {
      lowest = wordsSplit[i].length
    }
  }
  let result = []
  for (let i = 0; i < wordsSplit.length; i++) {
    if (wordsSplit[i].length === lowest) {
      let isExists = false
      for (let j = 0; j < result.length; j++) {
        if (result[j].toLowerCase() === wordsSplit[i].toLowerCase()) {
          isExists = true
        }
      }
      if (!isExists) {
        result.push(wordsSplit[i])
      }
    }
  }
  return result
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']
console.log(shortestWords('Apapun hasilnya, kita sudah berusaha, serahkan saja')); // ['kita', 'saja']