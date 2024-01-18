/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //let splict= haystack.split(needle);
    console.log(haystack);
    let finalString = haystack.replaceAll(needle, "_");
    //let splict= finalString.split("_");
    console.log("___",finalString);
    let index = -1;
    for(let i=0;i<finalString.length;i++){
        console.log("___ inside for loop -__ ",finalString[i]);
        if(finalString[i] == '_'){
            index= i;
            break;
        }
    }
    return index;
};

console.log("_______ strStr --- ",strStr("hello","ll9"));