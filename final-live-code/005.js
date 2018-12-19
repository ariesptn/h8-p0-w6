/*
=============
Toko Kopinyaa
=============

[INSTRUCTIONS]
Toko Kopinyaa adalah kedai kopi yang melayani pelanggannya sesuai menu andalan yang dimilikinya.
Adapun menu yang tersedia di kedai kopinyaa adalah:
Coldbrew, Coffeenyaa, Javachino

Menu di atas harus menggunakan recipe andalan rahasiannya, sebagai berikut (ssst ini rahasia ya):
<menu: recipe1, recipe2, harga>
- Coldbrew: 2 sugar, 2 kopi, 30000
- Coffeenyaa: 1 sugar, 3 kopi, 5000
- Javachino: 3 sugar, 1 kopi, 40000

setiap harinya, tokoKopinya selalu re-stock bahannya:
30 sugar dan 30 kopi

Kita diminta untuk membuat aplikasi laporan penjualannya setiap harinya

Function akan menerima array yang berisikan object pembeli (waktu pembelian, menu yang ingin dibeli dan jumlah menu yang dibelinya). Jika stock recipe kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli menu tersebut.

Function profitCalculator akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek menu dari toko Kopinyaa: 
info nama menu, waktu pembelian, total profit, total berapa kopi yang dibeli

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
*/

function profitCalculator(buyer) {
  if (buyer.length < 1) {
    return []
  }
  // stock sugar and kopi
  var stock = [30, 30]

  // list menu, sugar, kopi, harga
  var listMenu = [
    ['Coldbrew', 2, 2, 30000],
    ['Coffeenyaa', 1, 3, 50000],
    ['Javachino', 3, 1, 40000]
  ];

  let sugar = stock[0]
  let kopi = stock[1]
  let listObj = {}
  for (let i = 0; i < listMenu.length; i++) {
    listObj[listMenu[i][0]] = {
      sugar: listMenu[i][1],
      kopi: listMenu[i][2],
      harga: listMenu[i][3]
    }
  }
  let result = []
  for (let i = 0; i < listMenu.length; i++) {
    result.push({
      menu: listMenu[i][0],
      time: [],
      profit: 0,
      total: 0
    })
  }
  let resultIndex = menu => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].menu === menu) {
        return i
      }
    }
    return -1
  }
  for (let i = 0; i < buyer.length; i++) {
    let sugarNeeded = buyer[i].amount * listObj[buyer[i].menu].sugar
    let kopiNeeded = buyer[i].amount * listObj[buyer[i].menu].kopi
    let hargaNeeded = buyer[i].amount * listObj[buyer[i].menu].harga
    if (sugarNeeded <= sugar && kopiNeeded <= kopi) {
      let ri = resultIndex(buyer[i].menu)
      result[ri].time.push(buyer[i].waktu)
      result[ri].profit += hargaNeeded
      result[ri].total += buyer[i].amount
      sugar -= sugarNeeded
      kopi -= kopiNeeded
    }
  }
  return result
}

// TEST CASES
console.log(profitCalculator([{ waktu: '08:00', menu: 'Coldbrew', amount: 2 }, { waktu: '09:00', menu: 'Coffeenyaa', amount: 5 }, { waktu: '15:00', menu: 'Javachino', amount: 2 }]));
// [ { menu: 'Coldbrew', time: [ '08:00' ], profit: 60000, total: 2 },
//   { menu: 'Coffeenyaa', time: [ '09:00' ], profit: 250000, total: 5 },
//   { menu: 'Javachino', time: [ '15:00' ], profit: 80000, total: 2 } ]

console.log(profitCalculator([{ waktu: '08:00', menu: 'Coldbrew', amount: 3 }, { waktu: '09:00', menu: 'Coldbrew', amount: 5 }, { waktu: '10;00', menu: 'Coffeenyaa', amount: 1 }, { waktu: '12:00', menu: 'Coffeenyaa', amount: 10 }, { waktu: '15:00', menu: 'Javachino', amount: 1 }]));
// [ { menu: 'Coldbrew', time: [ '08:00', '09:00' ], profit: 240000, total: 8 },
//   { menu: 'Coffeenyaa', time: [ '10;00' ], profit: 50000, total: 1 },
//   { menu: 'Javachino', time: [ '15:00' ], profit: 40000, total: 1 } ]

console.log(profitCalculator([{ waktu: '14:00', menu: 'Coffeenyaa', amount: 100 }]));
// [ { menu: 'Coldbrew', time: [], profit: 0, total: 0 },
//   { menu: 'Coffeenyaa', time: [], profit: 0, total: 0 },
//   { menu: 'Javachino', time: [], profit: 0, total: 0 } ]

console.log(profitCalculator([]));
//[]