




// 0 = false
// 1 = true

// var kucing = 'kocheng'
// var oren;
// var email;

// if(email){
//     console.log('ada emailnya bro')
// }else{
//     console.log('diisi yg bener')
// }

var oren

function kocheng(){
    var x = 3
    var y = 10
    x = 7
    y = 12
    x = 9

    return x+y
}

function bertasbih(){
    var nomor = 7
    var tulisan = 'halo'

    return tulisan
}

function tambah(a, b, c=10, d=5){
    return a + b + c + d
}

var x = 10
var y = 5

// console.log(tambah(x, x, x, x))

function segitiga(len){
    var z = ''
    for (var k = 0; k < len; k++) {
        for (var i = 0; i <= k; i++) {
            z += "*"
        }
        z += "\n"
    }
    return z
}

// var d = new Date()

// console.log(d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear())

function tampil(barang){
    for(var i = 0; i < barang.length; i++){
        console.log(barang[i] * 3)
    }
}

// var arr = ['fikri', 'seto', 'eric', 'budi', 'kocheng', 'naruto', 'hayabusa']
var newArr = [1,2,3,4,5,6,7,8]

// tampil(newArr)

























