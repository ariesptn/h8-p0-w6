/*
================
MISSING NUMBER
================

description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  if (arr.length < 1) {
    return []
  }
  let numbers = []
  let lowest = arr[0][0]
  let highest = arr[0][0]
  for (let a of arr) {
    for (let n of a) {
      if (typeof n === 'number') {
        numbers.push(n)
        lowest = n < lowest ? n : lowest
        highest = n > highest ? n : highest
      }
    }
  }
  let result = []
  for (let i = lowest; i < highest; i++) {
    let isExists = false
    for (n of numbers) {
      if (n === i) {
        isExists = true
      }
    }
    if (!isExists) {
      result.push(i)
    }
  }
  return result
}


console.log(missingNum([[3, ' ', 5], [1, ' ', 7], [9, ' ', ' ']])) // [ 2, 4, 6, 8 ]
console.log(missingNum([[2, ' '], [' ', 5]])) // [ 3, 4 ]
console.log(missingNum([[11, ' ', 13], [17, ' ', 19], [' ', 16, ' ']])) // [ 12, 14, 15, 18 ]
console.log(missingNum([[3, ' ', 5, 15], [1, ' ', 7, 13], [9, ' ', ' ', 12], [' ', 16, ' ', ' ']])) // [ 2, 4, 6, 8 ]
console.log(missingNum([])) // []