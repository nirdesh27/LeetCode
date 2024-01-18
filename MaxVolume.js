
function pushUnique(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === value[0] && arr[i][1] === value[1] && arr[i][2] === value[2]) {
            return;
        }
    }
    arr.push(value);
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let start = 0;
    let last = nums.length -1;
    let middle = -1;
    let result_array = [];
    nums.sort(function(a,b){
        return a-b;
    })
    while(start<last){
        let temp_array = [];
        middle = start+1;
        while(middle < last){
            if(nums[start] + nums[last] + nums[middle] == 0){
                temp_array.push(nums[start]);
                temp_array.push(nums[middle]);
                temp_array.push(nums[last]);
                pushUnique(result_array, temp_array);
                //result_array.push(temp_array);
                temp_array = [];
                //break;
            }
            middle++;
        }

        if(nums[start]+nums[last]<0){
            start++;
        }else{
            last--;
        }
    }
    return result_array;
};

console.log("___ ",threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));