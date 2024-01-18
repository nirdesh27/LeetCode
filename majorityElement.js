/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    });
    let final = nums[0];
    let freq = 1;
    let element = nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i] == element){
            freq++;
            if(freq > (nums.length)/2){ final = element; return final;}
        }else{
            element = nums[i];
            freq = 1;
        }
    }
    return final;
};