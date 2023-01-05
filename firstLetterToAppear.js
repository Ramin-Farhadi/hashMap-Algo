/* 
Example 2: 2351. First Letter to Appear Twice

Given a string s, return the first character to appear twice. It is guaranteed that the input will have a duplicate character. 
s='abcdeda'

*/

//With OBject

// const twiceLetter = (str) => {
//     const newObj = {};
//     for(let i = 0; i < str.length; i++){
//         if(newObj[str[i]]){
//             return newObj[str[i]];
//         }else{
//             newObj[str[i]] = str[i] ;
//         }
//     }
//     console.log(newObj);
// }


// Set data structure
const twiceLetter = (str) =>{
    const mySet = new Set();
    for(const char of str){
        if(mySet.has(char)){
            return char;
        }else{
            mySet.add(char);
        }
    }
    return false;
}

const s = 'abacdeda';
console.log(twiceLetter(s));
