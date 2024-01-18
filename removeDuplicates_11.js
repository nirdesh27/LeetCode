/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 2) return nums.length;
    let unique = 1;
    for(let i=2;i<nums.length;i++){
        if(nums[i] != nums[unique-1]){
            unique++;
            nums[unique] = nums[i];
        }
    }
    console.log("___ final array ___ ",nums);
    return unique + 1;
};

console.log("___ third check ___ ",removeDuplicates([1,1,1,2,3,3,3,3,4]));