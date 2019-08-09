
    function test(){
        function a(arr){
            return {
                [arr[1]] : [0,1,2,3,4,{
                    caci : (string) => {
                        return [0,function(){
                            return 'hehe iseng'
                        }]
                    }
                }]
            }
        }

        return a
    }

    // console.log(test()(['kuri', 'coba']).coba[5].caci('Hello')[1]())

    var x = 7
    var y = 9

    // console.log('x = ' + x + ' dan y = ' + y)


var oren = null;

console.log(oren)

if(oren){
    console.log('masuk if')
}else{
    console.log('masuk else')
}