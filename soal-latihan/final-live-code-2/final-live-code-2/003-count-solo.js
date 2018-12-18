
/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.

Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6

RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!

*/

// function countSolo (numbers) {
//   var obj = {}
//   for (var i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i])
//     if(obj[numbers[i]] === undefined){
//       obj[numbers[i]] = 1
//     } else {
//       obj[numbers[i]] += 1
//     }
//   }

//   var counter = 0;
//   var objValues = Object.values(obj);
//   var objKeys = Object.keys(obj);
//   // console.log(objValues)
//   console.log(objKeys)

//   for (var j = 0; j < objValues.length; j++) {
//     // console.log(objValues[i])
//     if(objValues[j] === 1){
//       var parsed = parseInt(objKeys[j]);
//       counter += parsed
//     }
//   }
//   return counter
// }

// console.log(countSolo([ 5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6 (3,1,2)
// console.log(countSolo([ 3, 6, 3, 6, 1, 1, 2, 1 ]))  // 2 (2)
// console.log(countSolo([ 3, 3, 3, 3, 4, 5, 8, 10, 11 ])) // 38 ()


// time: 15 mins

// function countSolo (numbers) {

//   var result = [];
//   var sort = numbers.sort()

//   for (var i = 0; i < numbers.length; i++) {
//     if(numbers[i] !== numbers[i+1] && numbers[i] !== numbers[i-1]){
//       result.push(numbers[i]);
//     }
//   }

//   var count = 0;
//   for (var i = 0; i < result.length; i++) {
//     // console.log(result[i])
//     count += result[i];
//   }
//   return count
// }

// console.log(countSolo([ 5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6 (3,1,2)
// console.log(countSolo([ 3, 6, 3, 6, 1, 1, 2, 1 ]))  // 2 (2)
// console.log(countSolo([ 3, 3, 3, 3, 4, 5, 8, 10, 11 ])) // 38 ()

function countSolo (numbers) {

  var obj = {};
  var strNum = [];
  for(var i = 0; i < numbers.length; i++){
    // console.log(numbers[i])
    if(obj[numbers[i]] === undefined){
      obj[numbers[i]] = 1
    } else {
      obj[numbers[i]]++
    }
  }
  // console.log(obj)
  var result = 0;
  for(var keys in obj){
    if(obj[keys] === 1){
      // console.log(keys)
      result += Number(keys)
    }
  }

  return result
}

console.log(countSolo([ 5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6 (3,1,2)
console.log(countSolo([ 3, 6, 3, 6, 1, 1, 2, 1 ]))  // 2 (2)
console.log(countSolo([ 3, 3, 3, 3, 4, 5, 8, 10, 11 ])) // 38 ()

// NEW : 4 minutes 54 sec