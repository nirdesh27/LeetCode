var removeDuplicates = function(nums) {
    var sortedAndUnique = Array.from(new Set(nums)).sort(function(a, b) {
    return a - b;
});
console.log("____ array is _____ ",sortedAndUnique);
    return sortedAndUnique.length;
};

console.log("_______ removeduplicates ____ ",removeDuplicates([1,1,2]));