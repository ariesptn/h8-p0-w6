/*
  ================
  GET MEMBER SUMMARY
  ================

  Get member summary adalah sebuah fungsi untuk mendapatkan ringkasan informasi
  berdasarkan data-data seperti nama depan, nama belakang, dan umur. Fungsi ini
  akan mengembalikan sebuah object dengan keyName total member, anggota yang paling tua
  , anggota yang paling muda dan avarage umur semua member.

  rules:
  - TIDAK boleh menggunakan built in function .sort()
  - TIDAK boleh menggunakan built in function .indexOf(), .include()
  - TIDAK boleh menggunakan built in function .Math.max() dan .Math.min()
  - TIDAK boleh menggunakan built in function .map(), .filter()
  - TIDAK boleh menggunakan regex ( match, replace, dll)
  - asumsi data memiliki umur yang berbeda-beda

  examples:
  - INPUT =
    [{
      first_name: 'Example',
      last_name: 'Contoh',
      age: 27
    }, {
      first_name: 'Some',
      last_name: 'Thing',
      age: 22
    }, {
      first_name: 'Manusia',
      last_name: 'Biasa',
      age: 19
    }],

  - OUTPUT = {
      total_member: 3,
      oldest_member: {
        full_name: 'Example Contoh',
        age: 27,
      },
      youngest_member: {
        full_name: 'Manusia Biasa',
        age: 19,
      },
      average_member_age = 23
    }
*/

function getMemberSummary(member) {
  if (!member.length) {
    return "NO data"
  }
  let youngestIndex = 0
  let oldestIndex = 0
  let totalAge = 0
  for (let i in member) {
    if (member[i].age < member[youngestIndex].age) {
      youngestIndex = i
    }
    if (member[i].age > member[oldestIndex].age) {
      oldestIndex = i
    }
    totalAge += member[i].age
  }
  let averageAge = totalAge / member.length
  let result = {
    total_member: member.length,
    oldest_member: {
      full_name: member[oldestIndex].first_name + ' ' + member[oldestIndex].last_name,
      age: member[oldestIndex].age
    },
    youngest_member: {
      full_name: member[youngestIndex].first_name + ' ' + member[youngestIndex].last_name,
      age: member[youngestIndex].age
    },
    average_member_age: Math.round(averageAge)
  }
  return result
}

console.log(getMemberSummary([{
  first_name: 'Wika',
  last_name: 'Silo',
  age: 30
}, {
  first_name: 'Dhani',
  last_name: 'Damara',
  age: 27
}, {
  first_name: 'Fandy',
  last_name: 'Barestu',
  age: 18
}, {
  first_name: 'Acha',
  last_name: 'Acha',
  age: 29
}, {
  first_name: 'Zena',
  last_name: 'Villenia',
  age: 32
}, {
  first_name: 'Annisa',
  last_name: 'Ayu',
  age: 21
}],
));
//output
/*
 {
   total_member: 6,
   oldest_member: {
      full_name: 'Zena Villenia',
      age: 32,
   },
   youngest_member: {
    full_name: 'Fandy Barestu',
    age: 18,
   },
   average_member_age: 26
 }
*/

console.log(getMemberSummary(
  [{
    first_name: 'Rama',
    last_name: 'Diansyah',
    age: 20
  }, {
    first_name: 'Malik',
    last_name: 'Adhi',
    age: 21
  }, {
    first_name: 'Dita',
    last_name: 'Zakiah',
    age: 27
  }]
))

/*
  total_member: 3,
  oldest_member: {
      full_name: 'Dita Zakiah',
      age: 27,
   },
  youngest_member: {
    full_name: 'Rama Diansyah',
    age: 20,
   },
   average_member_age: 23
*/

console.log(getMemberSummary(
  [{
    first_name: 'Zena',
    last_name: 'Villenia',
    age: 20
  }]
))
/*
  {
    total_member: 1,
    oldest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
    youngest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
    average_member_age: 20
  }
*/

console.log(getMemberSummary([])) //NO DATA

// if (member.length === 0) {
//   return 'NO DATA';
// }
// else {
//   var result = {
//     total_member: member.length,
//     oldest_member: {
//         full_name: member[0].first_name + ' ' + member[0].last_name ,
//         age: member[0].age
//         },
//     youngest_member: {
//         full_name: member[0].first_name + ' ' + member[0].last_name ,
//         age: member[0].age
//         },
//     average_member_age: null
//   };

//   // AVERAGE:
//   var totalAge = 0;
//   // console.log(result.oldest_member);

//   for (var i=0; i<member.length; i++) {
//     // console.log(member[i].age);
//     totalAge += member[i].age;

//     if (member[i].age > result.oldest_member.age) {
//       result.oldest_member = {
//           full_name: member[i].first_name + ' ' + member[i].last_name,
//           age: member[i].age
//       }
//       // member[i];
//     }

//     if (member[i].age < result.youngest_member.age) {
//       result.youngest_member = {
//           full_name: member[i].first_name + ' ' + member[i].last_name,
//           age: member[i].age
//       }
//     }
//   }

//   result.average_member_age = Math.round(totalAge / member.length);

//   return result;
// }
