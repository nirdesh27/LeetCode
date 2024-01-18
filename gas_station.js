/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    // find start index first
    let currentGas = 0;
    let totalGas = 0;
    let startIndex = -1;
    for(let i=0;i<gas.length;i++){
        currentGas = currentGas + gas[i] - cost[i];
        totalGas = totalGas + gas[i] - cost[i];
        if(currentGas <0){
            currentGas = 0;
            startIndex = i+1;
        }
    }
    return totalGas>=0? startIndex: -1;
};

console.log("______   ",canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));