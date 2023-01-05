/* 
Example 2: 2351. First Letter to Appear Twice

Given a string s, return the first character to appear twice. It is guaranteed that the input will have a duplicate character. 
s='abcdeda'

*/

const twiceLetter = (str) => {
    const newObj = {};
    for(let i = 0; i < str.length; i++){
        if(newObj[str[i]]){
            return newObj[str[i]];
        }else{
            newObj[str[i]] = str[i] ;
        }
    }
    console.log(newObj);
}

const s = 'abcdeda';
console.log(twiceLetter(s));
