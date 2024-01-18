var removeDuplicates = function(nums) {
    // if (nums.length <= 2) {
    //     return nums.length;
    // }

    let index = 1; // Start from the third element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[index - 1]) {
            nums[index++] = nums[i];
        }
    }

    return index;
};

console.log("_______ removeduplicates ____ ",removeDuplicates([1,1,2]));