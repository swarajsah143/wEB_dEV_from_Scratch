vowels=['a','e','i','o','u']
let c=0
function countVowel(string){
    for(let i=0;i<string.length;i++){
        for(let vowel of vowels){
            if(string[i]==vowel){
                c+=1
            }
        }
    }
    console.log(`Total no. of vowels = ${c}`)
}
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