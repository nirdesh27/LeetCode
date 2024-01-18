/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return "";
    }
    if(strs.length === 1) return strs[0];
    strs.sort();
    let commonPrefix = "";
    let firstString = strs[0];
    let lastString = strs[strs.length -1 ];
    for(let i=0;i<firstString.length;i++){
        if(firstString[i] == lastString[i]){
            commonPrefix = commonPrefix + firstString[i];
        }else{
            break;
        }
    }
    return commonPrefix;
    
};