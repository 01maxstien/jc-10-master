function fibo(len) {
    var arr = [0, 1]
    for (var i = 2; i < len; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }

    return arr
}
console.log(fibo(2))

// const fibo = (urut) => {
//     if (urut < 3) {
//         return 1;
//     } else {
//         return fibo(urut - 1) + fibo(urut - 2);
//     }
// }
// console.log(fibo(1));

// var x = ['z', 'j', 'm', 'c', 'y', 'x', 'w', 'r', 'f', 'p', 'a']
// const bubbleSort = (array) => {
//     for (let i = array.length; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (array[j] > array[j + 1]) {
//                 const temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }
// console.log(bubbleSort(x))


// var x = 7
// var y = 3

// temp = x
// x = y
// y = temp

// console.log(`y = ${y}; x = ${x}`)

// function palindrome(str){
//     var reverseKata = str.split('').reverse().join()

//     if(str == reverseKata){
//         return true
//     }else{
//         return false
//     }
// }

// var arr = [1,3,7,4,1]

// console.log(arr.toString())

// console.log(palindrome('malam'))