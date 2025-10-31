// vowels=['a','e','i','o','u']
// let c=0
// function countVowel(string){
//     for(let i=0;i<string.length;i++){
//         for(let vowel of vowels){
//             if(string[i]==vowel){
//                 c+=1
//             }
//         }
//     }
//     console.log(`Total no. of vowels = ${c}`)
// }
// countVowel('My name is Swaraj')


// By arrow function

// let arrowFunction=(string)=>{
//     for(let i=0;i<string.length;i++){
//         for(let vowel of vowels){
//             if(string[i]==vowel){
//                 c+=1
//             }
//         }
//     }
// }
// arrowFunction('My aaaaaa is Swaraj')
// console.log(`Total no. of vowels = ${c}`)


// Higher order function is a function which can take parameter as another function  or can take the return value of a function

// vowels=[1,2,3,4,5]
// let callBack=(value)=>{
//     console.log(Math.pow(value,2))
// }
// vowels.forEach(callBack)   //we are passing another function inside forEacharray method


// Here value will be a,e,i,o,u one by onne 

// vowels=['a','e','i','o','u']
// vowels.forEach((value)=>{
//     console.log(value.toUpperCase())

// })
// vowels=[1,2,3,4,5]
// vowels.forEach((value)=>{
//     // console.log(value*value)
//     console.log(Math.pow(value,2))

// })


// let num=[1,2,3,4,5]
// const output=num.reduce((res,curr) => {   // reduce method returns only single value. here res=1 and curr=2 for 1st time and for 2nd time res=3(1+2) and curr=3
//     return res+curr
// })
// console.log(output)



let marks=[67,88,97,87,93,91,70,67,99]
let toppers=marks.filter((value)=>{
    return value>80
    
})
console.log(toppers)

