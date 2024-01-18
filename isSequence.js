/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j=0;
    let matchedString = "";
    for(let i=0;i<t.length ;i++){
        if(j == s.length) break;
        if(s[j] === t[i]){
            j++;
        }
    }
    console.log("___ matched ",matchedString);
    if(j == s.length) return 1;
    return 0;
};

console.log("______ ",isSubsequence("abc","ahgdc"));