

var arrItem = ['Jeruk', 'Apel', 'Leci']
var arrPrice = [3000, 7000, 10000]

function tambahItem(item, harga){
    var menu = ''
    arrItem.push(item)
    arrPrice.push(harga)

    for(var i = 0; i < arrItem.length; i++){
        menu += (i+1) + '. ' + arrItem[i] + ' Rp.' + arrPrice[i] + '\n'
    }

    return menu
}

function satu(){
    return 3
}

function hapusItem(item){
    var x = arrBaru.indexOf(item)

    arrKodePos.splice(x, 1)
    arrBaru.splice(x, 1)

    console.log(arrBaru)
    console.log(arrKodePos)
}
        // tampilItem('Jakarta')
        // output -> Jakarta dan kodeposnya

function tampilItem(item){
    var x;

    if(arrBaru.includes(item)){
        x = arrBaru.indexOf(item)
        console.log('Kota anda : ' + arrBaru[x] + ' kode pos : ' + arrKodePos[x])
    }else{
        console.log('Kota anda tidak ada')
    }

}

var arrBaru = ['Medan', 'Bandung', 'Jakarta', 'Palembang', 'Manado', 'Tangerang']
var arrKodePos = [11,12,13,14,15,16]

tampilItem('Jakarta')






// arrBaru.splice(arrBaru.indexOf('Jakarta'), 1)
// console.log(arrBaru.indexOf('Bandung'))
// console.log(arrKodePos[arrBaru.indexOf('Jakarta')])


// hapusItem('bandung')