var lengthOfLongestSubstring = function(str) {
    if(str.length === 1){
        return 1 
    }
    let left = 0;
    let ans = 0;
    const myMap = new Map();
    for(let right = 0; right < str.length; right++ ){
        myMap.set(str[right],(myMap.get(str[right]) || 0) + 1)
        
        while(myMap.get(str[right]) > 1){
            myMap.set(str[left], myMap.get(str[left]) - 1);
            if(myMap.get(str[left]) === 0){
                myMap.delete(str[left]);
            }
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;

};

const s = " ";
console.log(lengthOfLongestSubstring(s))