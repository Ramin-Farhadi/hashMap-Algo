/* 
Example 3: Given an integer array nums, find all the numbers x that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.
*/
const findNumbers = (nums) =>{
    const mySet = new Set(nums);
    const ans = [];
    
    for(const num of mySet){
        if(!mySet.has(num+1) && !mySet.has(num-1)){
            ans.push(num);
        }
    }
    return ans;
}


const myArray = [5,2,7,10,3,9];
console.log(findNumbers(myArray))