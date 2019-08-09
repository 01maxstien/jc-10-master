// ============ KAPREKARS CONSTANT ============

function kaprekars(num){
    var i = 0
    while(num != 6174){
        arrAsc = parseInt(num.toString().split('').sort().join(''))
        arrDes = parseInt(num.toString().split('').sort((a,b) => b-a).join(''))
        num = arrDes - arrAsc
        console.log(arrDes + ' - ' + arrAsc)
        while(num.length < 4){
            num = hasil.toString() + 0
            num = parseInt(num)
        }
        i++
    }
    return i + " ||| " + num
}


var num = 7615
console.log(kaprekars(num))
 
// ============ END OF KAPREKARS CONSTANT ============

// ========== MUMBLE ==========

mumble = (string) => {
    var result = ''
    var splitString = string.split('') // [f,g,j,i]
    for(var i = 0; i < string.length; i++){
        for(var j = 0; j <= i; j++){
            if(j == 0){
                result += splitString[i].toUpperCase()
            }else{
                result += splitString[i]
            }
        }
        result += '-'
    }
    return result.slice(0,-1)
}
// fgji
console.log(mumble(x))

// ========== END OF MUMBLE ==========

// ========== SORT DUPLICATE ==========

sortDup = (arr, anon) => {
    sort = true
    while(sort){
        sort = false
        for(var i = 0; i < arr.length; i++){
            if(anon(arr[i], arr[i+1]) > 0){
                var t = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = t
                sort = true
            }
        }
    }
    return arr
}

// ========== END OF SORT DUPLICATE ==========

// ========== MAX DIFFERENCE ==========

function maxDiff(arr){
    var sortedArr = arr.sort(function(a,b){return b-a})
    return sortedArr[0] - sortedArr[1]
}

// ========== END OF MAXX DIFFERENCE ==========