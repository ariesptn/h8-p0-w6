/*

Diberikan sebuah function tukar besar kecil yang akan
mengembalikan nilai yang terbalik dari a sampai z

example:
1. input : 'Halo'
   output : 'hALO'

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function tukarBesarKecil
- Dilarang mengubah tipe data parameter
- Dilarang membuat function didalam function yang bertujuan untuk melakukan rekursif

*/

function tukarBesarKecil(kalimat) {

    if(kalimat.length === 0){
        return "";
    } else {
        var huruf = kalimat[0];
        // console.log(huruf)
        var modif = kalimat.substring(1, kalimat.length);
        // console.log(modif)
        if(huruf === huruf.toLowerCase()){
            return huruf.toUpperCase() + tukarBesarKecil(modif)
        } else if (huruf === huruf.toUpperCase()) {
            return huruf.toLowerCase() + tukarBesarKecil(modif)
        }
    }
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
