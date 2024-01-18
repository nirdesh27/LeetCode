var canJump = function (nums) {
    let max_value = 0;
    for (let i = 0; i < nums.length; i++) {
        if(i > max_value) return false;
        max_value = Math.max(max_value, i+nums[i]);
        if(max_value >= nums.length -1 ) return true
    }
};

// remember current point se aage jump karna hai 