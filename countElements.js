/**
 */
var countElements = function(arr) {
    const mySet = new Set(arr);
    let count = 0;
    
    for(const num of arr){
        let x = num + 1;
        mySet.has(num) && mySet.has(x) ? count++ :
    ''
    }
    console.log(mySet)
    return count;
};


const array = [1,2,3];
console.log(countElements(array));