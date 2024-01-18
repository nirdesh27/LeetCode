
function pushUnique(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == value[0] && arr[i][1] == value[1] && arr[i][2] == value[2]) {
            return 0;
        }
    }
    return 1;
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums){
    let result_array= [];
    nums.sort(function(a,b){
        return a-b;
    })
    for(let i=0;i<nums.length -2;i++){
        let start = i+1;
        let last = nums.length -1;
        //console.log(start,last,i);
        while(start<last){
            let sum = nums[i]+nums[start]+nums[last];
            //console.log("___ ",sum);
            if(sum == 0){
                let temp = [];
                temp.push(nums[i]);
                temp.push(nums[start]);
                temp.push(nums[last]);
                console.log(temp);
                //check duplicates
                //console.log("______ temp ___ ",temp);
                if(pushUnique(result_array,temp)){
                    result_array.push(temp);
                }
                //result_array.push(temp);
            }
            if(sum<0){
                start++;
            }else{
                last--;
            }
        }
    }
    return result_array;
}

console.log("______",threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]));