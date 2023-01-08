/* 
Example 1: You are given a string s and an integer k. 
Find the length of the longest substring that contains at most k distinct characters.

For example, given s = "eceba" and k = 2, return 3. 
The longest substring with at most 2 distinct characters is "ece".
*/

const s ='eabadjt';
const counting = (str,k) => {
    const myMap = new Map();
    let left = ans = 0;
    for(let right = 0 ; right < str.length ; right++){
        myMap.set(str[right], (myMap.get(str[right]) || 0) + 1);
        while(myMap.size > k){
            myMap.set(str[left], myMap.get(str[left]) - 1)
            if(myMap.get(str[left]) === 0){
                myMap.delete(str[left]);
            }
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}

console.log(counting(s,2))