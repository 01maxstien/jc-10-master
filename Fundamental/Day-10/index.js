// Bahas tugas 9

num = [17,23,26,18,117,311]
// [17,18,23,26,117, 311]

function median(arr){
    arr.sort(function(a,b){
        return a-b
    })
    if(arr.length % 2 != 0){
        medianIndex = Math.floor(arr.length / 2)
        return arr[medianIndex]
    }else{
        medianIndex1 = (arr.length / 2) - 1
        medianIndex2 = (arr.length / 2)
        return (arr[medianIndex1] + arr[medianIndex2]) / 2
    }
}


console.log(median(num))




























/**
 * === LATIHAN REACT ===
 * Buat function cart
 * Buat transaction history
 * BUat transaction detail
 * Mulai design database final project!
 */