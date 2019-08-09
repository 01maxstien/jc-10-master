// var arr = ['Seto', 'Andi', 'Naruto', 'Popok']

// console.log(arr.includes('Seto'))

// console.log()


// var cartBarang = ['Lemon', 'Kiwi']

// var cartQty = [6, 5]

function reverseKata(kata){
    return kata.split('').reverse().join('')
}



function repIncludes(val, arr){
    var hasil;
    for(var i = 0 ; i < arr.length; i++){ // i = 1
        if(val == arr[i]){ // Andi == Popok -> false
            hasil = true
            break;
        }else{
            hasil = false
        }
    }
    return hasil
}

function repIndexOf(kata, arr){
    for(var i = 0; i < arr.length; i++){
        if(kata == arr[i]){
            return i
        }
    }
    return -1
}

var arrayku = ['Seto', 'Andi', 'Naruto', 'Popok']

// console.log(repIncludes('Andi', arrayku)) // -> true or false



// console.log(repIndexOf('Naruto', arrayku))


// var arr2D = [7, 'Sasuke', [3, 'Naruto']]

// console.log(arr2D[2])

function bebas(){
    function e(){
        return [7,3,2,[9,4,5,['Popok', 'Bertasbih'], 0]]
    }

    return e
}
//             [7,3,2,[9,4,5,['Popok', 'Bertasbih'], 0]]

// console.log(bebas()()[3])

var x = 7

function wakacau(){
    return [1,2,3,3,2,1]
}

var arraySaya = [x,1,2,wakacau,4,5]

// console.log(arraySaya[3]())

     //     [0,1,2,3...]
// console.log(arraySaya[4])


var matrix = [
    ['a','b','c'],
    ['d','e','f'],
    ['x','y','z']
]

// console.log(matrix[1])

// ========== OBJECT BROOOO ==========

var mobil = {
    merek : 'Toyota',
    warna : 'Merah'
}

// console.log(mobil)

class Human{
    constructor(a, b, c){
        this.name = a,
        this.age = b,
        this.job = c
    }
}

var orang = new Human('Steve Jobs', 43, 'Orkay Bro')

console.log(orang.name)

