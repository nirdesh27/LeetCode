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
        console.log("_______ temp ___ ",temp);
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    return nums;
}
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // remove all spaces and get strings into the array
    const wordsArray = s.trim().split(/\s+/);
    console.log("________ trippmed array ___ ",wordsArray);
    let reversedArray = reverse(wordsArray, 0, wordsArray.length-1);
    console.log("_____ reversed Array ______ ",reversedArray);
    let finalStringToReturn = "";
    for(let i=0;i<reversedArray.length;i++){
        finalStringToReturn += reversedArray[i] + " ";
    }
    return finalStringToReturn.trim();
};

reverseWords(" hello words ");
