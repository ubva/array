// function vowel(str){
//     let = 0
//     let vowel = "aeiou"
//     for(let i = 0; i<str.length; i++){
//         // if(vowel.includes(str[i])){
//         //     count += 1
//         // }
//         // if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'u' || str[i] == 'o'){
//         //     count +=1
//         // }
//         // if(str[i] == "a"){
//         //     count +=1
//         // }
//         // else if(str[i] == "e"){
//         //     count+=1
//         // }
//         // else if(str[i] == "i"){
//         //     count +=1
//         // }
//         // else if(str[i] == "o"){
//         //     count +=1
//         // }
//         // else if(str[i] == "u"){
//         //     count +=1
//         // }
// }
//  return count
// }
// console.log(vowel("salom"))


// let arr= ['5', '4', '3', 'olma', 'davlat']
// console.log(arr.length)
// // arr.push('f')
// // arr.splice(2,1)
// // arr.pop('davlat')
// // arr.unshift('6')
// // arr.shift('5')
// // arr.reverse()

// let s = 'salom'
// console.log(s.split("").reverse().join(""))



// let arr= ['5', '4', '3', 'olma', 'davlat']

// for(let i =0; i<arr.length; i++){
//     console.log(arr[i])
// }


//  Birinchi masala

// function strReverse(str){
//     let newStr = str.split(" ")
//     let result = []
//     // let result = ''
//     for(let i =0; i<newStr.length; i++){
        // result.push(newStr[i].split("").reverse().join(""))
        // result += " " + newStr[i].split("").reverse().join("") yoki bu yoli
//     }
//     return result.join(" ")
//     // return result.trim()
// }
// console.log(strReverse('car tiger'))


// function findReshotka(arr){
//     for(let i =0; i<arr.length; i++){
//         if(arr[i].includes('#')){
//             return false
//         }
//     }
//     return true
// }
// console.log(findReshotka('olma', 'ni#ma'))


function func(arr, str){
    let varReturn = ''
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == str){
            return i
        }
    }
    return varReturn
}
console.log(func(['hi', 'edabit', 'fgh', 'abc'], 'abc'))

function returnFunc(arr){

    let value = arr.pop() 
    return value
}
console.log(returnFunc(['1', '2', '3']))