/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let container = {}; 
    
    for (let i = 0; i < nums.length; i++) {
        if (container[nums[i]]) {
            container[nums[i]] ++
        } else {
            container[nums[i]] = 1
        }
    }
    
    for (key in container) {
        if (container[key] > 1) {
            return true;
        } 
    }
    return false;
    
};