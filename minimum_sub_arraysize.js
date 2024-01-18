    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    var minSubArrayLen = function(target, nums) {
        let minlength = 9999999;
        let left=0;
        let total = 0;
        
        for(let right=0;right<nums.length;right++){
            total +=nums[right];

            while(total >= target){
                minlength = Math.min(minlength,right -left +1);
                total -= nums[left];
                left++;
            }
            

        }
        return minlength ==9999999? 0: minlength;;
    };

console.log("__________ ",minSubArrayLen(7,[2,3,1,2,4,3]));