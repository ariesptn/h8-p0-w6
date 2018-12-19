/*
================
Monster Hunter
================

[INSTRUCTIONS]
sebagai hunter, kita akan mencari harta karun('$') selama dalam perjalanan.

perjalanan digambarkan dalam sebuah string dan ditandai dengan berbagai kode:
- '*' adalah tanda kita mendapatkan serangan dari monster
- 'x' adalah tanda kita melakukan serangan dan berhasil membunuh monster itu
- '$' adalah tanda berhasil mendapatkan gold selama di perjalanan
- '-' adalah tanda selama di perjalanan tidak terjadi apa-apa

jika selama perjalanan dia mendapatkan 3 serangan, maka hunter akan kembali pulang dan akan memberikan info berapa banyak gold($) yang didapatkan.
jika dia berhasil membunuh 5 monster, maka hunter akan pulang untuk beristirahat
dan jika selama perjalanan tidak masuk kondisi yang ada di atas, hunter akan memberikan info berapa banyak gold yang didapat

ps: PERHATIKAN TEST CASE UNTUK OUTPUT YANG SESUAI

Buatlah sebuah algoritma/pseudocode dan buatlah sebuah function yang akan menerima sebuah inputan string dengan output sesuai dengan penjelasan di atas.

[RULE]
- WAJIB menggunakan algoritma/ pseudocode

[EXAMPLE]
input: '---x---$-$-$-*-*-$'
proses: mengikuti kondisi di atas
output: 'Selamat, kamu berhasil mendapatkan 4 gold!'

Algoritma / Pseudocode here..

FUNCTION monsterHunter WITH PARAMETER string
  STORE gold AS 0
  STORE serangan AS 0
  STORE bunuh AS 0
  STORE i AS 0
  WHILE  i < LENGTH OF string DO
    IF INDEX i OF string = '$' THEN
      gold = gold + 1
    ELSE IF INDEX i OF string = '*' THEN
      serangan = serangan + 1
      IF serangan >= 3 THEN
        RETURN 'Kamu terluka parah, kamu hanya mendapatkan ' + gold + ' gold'
      END IF
    ELSE IF INDEX i OF string = 'x' THEN
      bunuh = bunuh + 1
      IF bunuh >= 5 THEN
        RETURN 'Kamu kelelahan, kamu hanya mendapatkan ' + gold + ' gold'
      END IF
    END IF
    i = i + 1
  END WHILE
  RETURN 'Selamat, kamu berhasil mendapatkan ' + gold + ' gold!'
END FUNCTION

*/

function monsterHunter(string) {
  let gold = 0
  let serangan = 0
  let bunuh = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '$') {
      gold++
    } else if (string[i] === '*') {
      serangan++
      if (serangan >= 3) {
        return 'Kamu terluka parah, kamu hanya mendapatkan ' + gold + ' gold'
      }
    } else if (string[i] === 'x') {
      bunuh++
      if (bunuh >= 5) {
        return 'Kamu kelelahan, kamu hanya mendapatkan ' + gold + ' gold'
      }
    }
  }
  return 'Selamat, kamu berhasil mendapatkan ' + gold + ' gold!'
}

console.log(monsterHunter('---x---$-$-$-*-*-$')) // 'Selamat, kamu berhasil mendapatkan 4 gold!'
console.log(monsterHunter('---x-xx-$-$-x-x-$-$-$')) // 'Kamu kelelahan, kamu hanya mendapatkan 2 gold'
console.log(monsterHunter('$$$---------***')) // 'Kamu terluka parah, kamu hanya mendapatkan 3 gold'
console.log(monsterHunter('$$$--x-x-x-$$-x--**')) // 'Selamat, kamu berhasil mendapatkan 5 gold!'
