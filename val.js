var removeElement = function(nums, val) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == val){
            count++;
            nums[i] = 9999;
        }
    }
    nums.sort(function(a,b){
        return a-b;
    });
    console.log("____ nums __ ",nums);
    return count;
};
console.log("___ reslt __ ",removeElement([0,1,2,2,3,0,4,2],2));