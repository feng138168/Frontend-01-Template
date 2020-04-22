function str2utf8(str){
    let arr = []
    for(var i = 0; i< str.length; i++){
        arr[i] = ''

        const nums2 = str.charCodeAt(i).toString(2)
        const nums16 = str.charCodeAt(i).toString(16)
        const numsCeil = getLen(nums16) // 该数需要在多少个字节
        if(numsCeil === 1){
            arr.push('0' + nums2)
        }else{
            let k = 0;
            const nums2Arr = nums2.split('')
            let nums2utf = ''
            let nums = nums2Arr.pop()
            while(typeof nums !== 'undefined'){
                if((nums2utf.length + numsCeil + 2) % 8 === 0 && k === 0){
                    nums2utf = getNums('1',numsCeil)+'0'+ nums + nums2utf
                    arr[i]+=nums2utf
                    nums2utf = ''
                    k ++ 
                }else if((nums2utf.length + 3) % 8 === 0 && k > 0) {
                    nums2utf = '10'+ nums + nums2utf
                    arr[i]+=nums2utf
                    nums2utf = ''
                    k ++ 
                }else {
                    nums2utf = nums + nums2utf
                }
                if(nums2Arr.length === 0 && nums2utf.length < numsCeil * 8){
                    nums2utf = '10'+ getNums('0',6 - nums2utf.length) + nums2utf
                    arr[i]+=nums2utf
                    nums2utf = ''
                    k ++ 
                }
                nums = nums2Arr.pop()
            }
            arr[i] = parseInt(arr[i],2).toString(16)
        }
        
    }
    return arr
}

function getNums(nums, len){
    let a = ''
    for(var i = 0; i< len;i ++){
        a+=nums
    }
    return a
}

function getLen(unicode){
    const nums = '0x'+unicode
    if(nums <= 0x007F ){
        return 1
    }else if(nums <= 0x07FF){
        return 2
    }else if(nums <= 0xFFFF){
        return 3
    }else if(nums <= 0x10FFFF){
        return 4
    }
}

console.log(str2utf8('严'))