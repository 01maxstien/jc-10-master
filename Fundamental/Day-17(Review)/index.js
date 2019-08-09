
wordWord = (string) => {
    let splitted = string.split(' ')
    let kata = ''
    let dalamKata = ''
    for(var i = 0; i < splitted.length; i++){
        for(var j = 0; j < splitted.length; j++){
            if(i == j){
                continue
            }else{
                if(splitted[i].includes(splitted[j])){
                    kata = splitted[j]
                    dalamKata = splitted[i]
                    return `${kata} ada di dalam ${dalamKata}`
                }
            }
        }
    }
}

// console.log(wordWord('astaga terjadi mengastagakan hello world'))

sameLetters = (string) => {
    let splitted = string.split(' ')

    for(var i = 0; i < splitted.length; i++){
        kata1 = splitted[i].split('').sort().join('')
        for(var j = 0; j < splitted.length; j++){
            if(i == j){
                continue
            }else{
                kata2 = splitted[j].split('').sort().join('')
                if(kata1 == kata2){
                    return splitted[i] + ' ||| ' + splitted[j]
                }
            }
        }
    }
}

var x = 'listen is silent'

console.log(sameLetters(x))