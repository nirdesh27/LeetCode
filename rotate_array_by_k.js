/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // Normalize rotation factor
    k = k % nums.length;

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    
    // Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Reverse the remaining n - k elements
    reverse(nums, k, nums.length - 1);
};

/**
 * Helper function to reverse a portion of the array in-place.
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
function reverse(nums, start, end) {
    while (start < end) {
        // Swap elements at start and end
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Example usage:
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);

console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]

var rotate = function(nums, k) {
    while(k>0){
        let element = nums[0];
        let element_next = 0;
        for(let i=1;i<nums.length;i++){
            element_next = nums[i];
            nums[i] = element;
            element = element_next;
        }
        nums[0] = element;
        k--;
    }
    return nums;
}
