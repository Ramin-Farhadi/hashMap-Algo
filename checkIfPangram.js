/*
A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence 
is a pangram, or false otherwise.
*/

const checkIfPangram = (str) => {
    const mySet = new Set();
    for(const char of str){
            mySet.add(char);
    }
    return mySet.size === 26 ? true : false;
}
const sentence = "ramin";

console.log(checkIfPangram(sentence));