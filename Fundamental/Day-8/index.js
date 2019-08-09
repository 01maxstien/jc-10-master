// var arr = [0,1,2,3,4,5]

// arr[3] = 'Naruto'

// console.log(arr)

var mobil = {
    warna : 'merah',
    tipe : 'sedan',
    plat : 'B 1234 CDE',
    interior : {
        wangi : 'Lavender',
        jok : 'kulit'
    },
    jalan : function(){
        return 'ngeeeeeeng'
    }
}

var diriku = {
    nama : {
        depan : 'Theodore',
        belakang : 'Mangowal'
    },
    pekerjaan : 'Penebar sukacita',
    hobby : 'Memahami ajaran semesta',
    namaFull : function(){
        return this.nama.depan + ' ' + this.nama.belakang
    }
}

// console.log(mobil.jalan())

// console.log('Namaku adalah ' + diriku.namaFull())
// console.log('Nama ku adalah ' + diriku.nama.depan + ' ' + diriku.nama.belakang)
// console.log('Aku adalah seorang ' + diriku.pekerjaan)
// console.log('Aku senang ' + diriku.hobby)

class Human{
    constructor(name,job,kegemaran){
        this.nama = name,
        this.pekerjaan = job,
        this.hobby = kegemaran
    }
}

var orang = new Human('Bill Gates', 'Businessman', 'Jadi kaya')
var dirinya = new Human('Mantan', 'Bikin sakit hati', 'Memancing keributan')

console.log(dirinya)