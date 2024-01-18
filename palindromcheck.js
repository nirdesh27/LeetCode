/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');
    let i=0;
    let j=s.length-1;
    let palindromFlag = 1;
    if(s.length == 1){
        return 1;
    }
    while(i<j){
        if(s[i] !== s[j]){
            palindromFlag = 0;
            break;
        }
        i++;
        j--;
    }
    return palindromFlag;
};
console.log("__________ : ",isPalindrome("0P"));