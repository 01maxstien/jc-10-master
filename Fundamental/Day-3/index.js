

// if(!(true)){
//     console.log('masuk')
// }else{
//     console.log('enggak')
// }
// declare var; condition;

// var len = 5

// for(var i = 0; i < len; i++){ // i = 0
//     console.log(i + 'i')
//     // for(var j = 0; j < i; j++){
//     //     console.log(j + 'j')
//     // }
//     console.log('masuk')
//     for(var k = 0; k < 2; k++){
//         console.log(k + 'k')
//     }
// }


// var kata = 'abcdef'
// var arr = ['andi', 'seto', 5, false]

// arr.push(kata)

// console.log(arr)



// var arr = []

// for(var i = 0; i < 5; i++){
//     arr.push(i)
// }

// console.log(arr)






// var arr = []

// for(var i = 0; i < 13; i++){
//     if(i % 3 == 0){
//         arr.push('buzz')
//     }else{
//         arr.push(i)
//     }
// }




// console.log(arr)











var hasil = ''
var z = ''
var len = 5

for(var i = 0; i < 5; i++){ // i = 3

    hasil += 'A'

    for(var j = 5; j > i; j--){ // j = 3
        hasil += 'C'
    }

    hasil += '\n'
}








console.log(hasil)














for (var k = 0; k < len; k++){                //Jumlah Baris
    for (var i = len; i >= k; i--){           //
        z += " "

    }
    z += '*'
    for (var j = 0; j < k; j++){
        for(var l = 0; l < 2; l++){
        z+= "*"
        }
    }
    z+= "\n"
}


console.log(z)