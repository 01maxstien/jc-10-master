

// return mengubah suatu function ketika dipanggil/execute menjadi value yang direturn

// function kali(a, b){
//     return a * b
// }



// ============ STRING METHODS ============
// var string = 'acbdbeltABbBABbbbfdeksdf'
// var tulisan = '   halo    dunia   '
// var buah = 'Apel Kiwi Lemon Jeruk'

// console.log(string.indexOf('d'))  // -> mencari index pertama kali suatu string muncul
// console.log(string.lastIndexOf('e')) // -> mencari index terakhir kali suatu string muncul
// console.log(tulisan.trim() // -> menghapus whitespace/spasi di awal dan akhir
// console.log(tulisan.trim().indexOf('h')) // -> method bisa dirantai/chain selama hasilnya sesuai/masuk akal
// console.log(buah.slice(6, 10)) // -> param 1 = index mulai dipotong param 2 = index terakhir (tidak termasuk)
// console.log(buah.slice(6))
// console.log(string.replace(/[ab]/gi, '')) // -> menggunakan RegExp
// console.log(buah.split(' ')[0]) // -> memisahkan string ke dalam index terpisah di dalam array
// console.log(namaku.lastIndexOf('halo', 4))

// ======================================================

// ============ ARRAY METHODS ============
var arrBuah = ['Jeruk', 'Apel', 'Lemon', 'Kiwi']
var arrBuah2 = ['Mangga', 'Leci']
var arrString = ['d', 'h', 'b' , 'a', 'j', 'z', 'A', 'F']
var arrNum = [1,3,31,21,12,7,9, 'g', 'halo']

// console.log(arrBuah.toString()) // -> convert jadi string
// console.log(arrBuah.join(' * ')) // -> gabung semua item array, param1 = pemisah
// arrBuah.push('Mangga') // -> menambahkan item ke array di akhir, return panjang array baru
// console.log(arrBuah)

// arrBuah.pop() // menghapus index terakhir array, return barang yg dihapus
// console.log(arrBuah)
// arrBuah.shift() // menghapus index pertama array, return barang yg dihapus
// console.log(arrBuah)

// arrBuah.unshift('Mangga') // menambahkan item ke array di awal return panjang array baru
// console.log(arrBuah)

// delete arrBuah[0]
// console.log(arrBuah)

// arrBuah.splice(2, 0, 'Mangga', 'Leci')
// console.log(arrBuah)

// var hasil = arrBuah.concat(arrBuah2) // gabung array

// console.log(arrBuah.slice(0,2))

// console.log(arrNum.sort(function(a,b){
//     return b-a
// }))

// console.log(arrString.sort())

// console.log(arrNum.filter())