

var abjad = 'abcdefghijklmnopqrstuvwxyz'
var arrAlphabet = abjad.split('')

// xyz
jumlahAlpha = (str) => {
    var hasil = 0
    // [a,a,b,c]
    str = str.split('')

    for(var i = 0; i < str.length; i++){
        hasil += arrAlphabet.indexOf(str[i]) + 1
    }

    return hasil
}

// console.log(jumlahAlpha('aabc'))

jumlahAlphaIndexGenap = (input) => {
    var hasil = 0
    input = input.split('')

    for(var i = 0 ; i < input.length; i++){
        if((arrAlphabet.indexOf(input[i]) + 1) % 2 == 0){
            hasil += arrAlphabet.indexOf(input[i]) + 1
        }
    }

    return hasil
}

// console.log(jumlahAlphaIndexGenap('aba'))

jumlahAlphaGanjil = (string) => {
    // 'bxctf'
    var hasil = 0
    // [b,x,c,t,f]
    // b = 0
    // c = 2
    // f = 4
    string = string.split('')

    for(i = 0; i < string.length; i++){
        if(i % 2 == 0){
            hasil += arrAlphabet.indexOf(string[i]) + 1
        }
    }

    return hasil
}

// console.log(jumlahAlphaGanjil('bxctf'))



var arr = [11,22,33,44]

var hasil = arr.map((val,idx) => {
    return val * 10
})

console.log(hasil)