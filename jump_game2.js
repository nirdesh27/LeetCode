/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length <=1) return 0;
    let max_jump = 0;
    let coverage = 0;
    let jump = 0;
    for(let i =0;i< nums.length;i++){
        max_jump = Math.max(max_jump, i+nums[i]);
        if(i == coverage){
            jump++;
            coverage = max_jump;
            if(coverage >= nums.length -1) break;
        }
        
    }
    return jump;
};