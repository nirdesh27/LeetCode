/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let product = 1;
    let zeroFlag = 0;
    let allzeroCount = 0;
    let otherZeroFlag = 0;
    for (let i = 0; i < nums.length; i++) {
        if(zeroFlag && nums[i] == 0) otherZeroFlag = 1;
        if (nums[i] != 0) { product = product * nums[i]; } else { zeroFlag = 1;
        allzeroCount++; }
    }
    let answerArray = [];
    for (let i = 0; i < nums.length; i++) {
        if(zeroFlag && otherZeroFlag){
            answerArray[i] = 0;
        }
        else if(zeroFlag){
            if(nums[i] !=0) {answerArray[i]=0}else{
                answerArray[i] = product;
            }
        }else{
          answerArray[i] = product/ nums[i];
        }
        
    }
    if(allzeroCount == nums.length) return nums;
    return answerArray;
};