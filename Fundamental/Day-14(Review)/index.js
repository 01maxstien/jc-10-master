// Data type
var string = 'ini adalah string'  // string
var number = 3      // number
var bool = true         // boolean
var undef;          // undefined
var kosong = null       // null

var sesuatu = string.split(' ')

var arr = [1,2,3,4,5]

var obj = {
    nama : 'Seto',
    usia : '37'
}

obj.pekerjaan = 'Coder'
obj.nama = 'Budi'

class Mobil{
    constructor(a,b,c){
        this.merek = a,
        this.tahun = b,
        this.tipe = c
    }
}

// var ngeeng = new Mobil('Toyota', '2013', 'Sedan')

var arrObj = [new Mobil('Honda', '2006', 'SUV'),
                new Mobil('Toyota', '2013', 'Sedan'),
                new Mobil('Ford', '2010', 'Street')]

function tambahBarang(a,b,c){
    var baru = new Mobil(b,c,a)

    arrObj.push(baru)
}

tambahBarang('Tayo', 'Polygon', '1945')

// console.log(arrObj)



function kelipatanTiga(awal, akhir){
    newArr = []
    for(var i = awal; i <= akhir; i++){
        if(i % 3 == 0){
            newArr.push(i)
        }
    }

    return newArr.join(',')
}

// console.log(kelipatanTiga(10,15))




















deretBilangan = (num) => {
    hasil = []
    sum = 1
    for(var i = 1; i <= num; i++){
        sum += i
        hasil.push(i)
    }
    // hasil = [1,2,3,4,5]
    // hasil = '1+2+3+4+5'
    return hasil.join('/') + " = " + sum
}
// console.log(deretBilangan(5))








function caesarCipher(word, num){
    // Array alphabet
    var alpArr = 'abcdefghijklmnopqrstuvwxyz'.split('')

    // Untuk cek per huruf
    var splitted = word.split('')

    // Loop pemindahan per huruf
    for(var i = 0; i < splitted.length; i++){
        // Index per huruf di array alphabet
        indexChar = alpArr.indexOf(splitted[i]) + num

        // Geser huruf
        splitted[i] = alpArr[indexChar]
    }

    return splitted.join('')
}

console.log(caesarCipher('halo', 3))