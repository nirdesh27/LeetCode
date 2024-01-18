function binarySearch(arr,left,right, target) {

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let temp_array = [];
    for(let i=0;i<numbers.length-1;i++){
        let first = numbers[i];
        let second = binarySearch(numbers,i+1,numbers.length-1,target-first);
        if(second !== -1){
            temp_array.push(i+1);
            temp_array.push(second+1);
        }
    }
    return temp_array;
};

console.log("____________________- : ",twoSum([-1,0],-1));