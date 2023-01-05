/* Given an array of integers nums and an integer target, return indices of two numbers such that they add up to target. You cannot use the same index twice. 
[5,2,7,10,3,9]; */

const twoSum = (arr,target) => {
    // const hashmap 
    // for each element in array -> hashmap[element] = index   ; 
    // temp = target - element
    // if hashmap[temp] then return [hashmap[element],hashmap[temp]]
    const hashMap = {};
    const indices = [];
    let temp = 0;
    arr.forEach((num,indice) => {
        debugger;
        temp = 0;
        hashMap[num] = indice;
        temp = target - num; 
        if(hashMap.hasOwnProperty(temp)){
            indices.push(hashMap[num],hashMap[temp]);
        }
    })
    return indices.length ? indices : false ;
};

const myArray = [5,2,7,10,3,9];

console.log(twoSum(myArray,8));
// console.log(hashMap);s