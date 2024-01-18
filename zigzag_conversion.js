/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // paypalishiring
    if(numRows ==1) return s;
    let res ="";
    let r=0;
    let increment = 1;
    while(r <numRows){
        increment = 2*(numRows -1);
        for(let i=r;i<s.length;i=i+increment){
            res+=s[i];
            if(r>0 && r<numRows-1 && i+increment -2*r<s.length-1){
                //console.log("____ inside ___ ",i+increment-2*r);
                res+=s[i+increment-2*r];
            }
        }
        
        r +=1;
    }
    return res;
};

console.log("________ : ",convert("PAYPALISHIRING",4))