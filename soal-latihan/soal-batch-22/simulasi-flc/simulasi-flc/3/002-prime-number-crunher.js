/*
-------------------
Prime Number Cruncher
-------------------

Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.

7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 7.
22 BUKAN bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

PROBLEM:
Disediakan sebuah function primeNumberCruncher yang menerima sebuah parameter
berupa number, dan mengembalikan kumpulan angka prima yang lebih besar
dari rata-rata kumpulan angka prima dari inputan parameter tersebut.

Contoh 1:
---------
input: 10

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7 ]
 - 2 + 3 + 5 + 7 = 17
 - AVERAGE: 17/4 = 4.25

output: [5, 7]

Contoh 2:
---------
input: 44

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
 - 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29 + 31 + 37 + 41 + 43 = 281
 - AVERAGE: 281/14 = 20.07

Output: [ 23, 29, 31, 37, 41, 43 ]

Contoh 3:
---------
input: 23

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
 - 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 = 100
 - AVERAGE: 100/9 = 11.11

output: [ 13, 17, 19, 23 ]

RULES
-----
 - DILARANG MENGGUNAKAN built-in function .map, .filter, .reduce

 PSEUDOCODE :

 STORE "prime" with the value of empty Array

 IF input EQUALS to 0 or input EQUALS to 1 THEN
  DISPLAY "prime"
 ELSE 
    FOR LOOP Index 0 of input 
      STORE "counter" with the value of 0
      FOR LOOP index 0 of input 
        IF i mod j EQUALS to 0 THEN
          "counter" add by 1
        END IF
      EXIT SECOND LOOP
    IF "counter" EQUALS to 2 THEN
      "prime" push i
    END IF
    EXIT LOOP

    STORE "sum" with the value of 0

    FOR LOOP index 0  to length of prime 
      add prime[k] to "sum" 
    EXIT LOOP

    STORE "average" with the value of sum/prime length (Math floor)
    STORE "result" with the value of empty Array

    FOR LOOP index 0 to length of prime
      IF prime[a] > average
        "result" push prime[a]
      END IF
    EXIT LOOP

    DISPLAY THE RESULT
  END IF

*/

function numberPrimeCruncher(input) {

  var prime = [];

  if(input === 0 || input === 1){
    return prime
  } else {

    for(var i = 0; i < input; i++){
      // console.log(i)
      var counter = 0;
      for(var j = 0; j < input; j++){
        if(i%j === 0){
          counter++
        }
      }
      // console.log(counter, i)
      if(counter === 2){
        prime.push(i)
      }
    }
    // console.log(prime)
  
    var sum = 0;
    for(var k = 0; k < prime.length; k++){
      // console.log(prime[k])
      sum += prime[k]
    }
  
    // console.log(sum)
    var average = Math.floor(sum/prime.length);
    var result = []
    // console.log(average)
    for(var a = 0; a < prime.length; a++){
      // console.log(prime[a])
      if(prime[a] > average){
        result.push(prime[a])
      }
    }
    return result
  }
}

console.log(numberPrimeCruncher(10)); // [ 5, 7 ]
console.log(numberPrimeCruncher(44)); // [ 23, 29, 31, 37, 41, 43 ]
console.log(numberPrimeCruncher(23)); // [ 13, 17, 19, 23 ]
console.log(numberPrimeCruncher(1)); // []
console.log(numberPrimeCruncher(0)); // []