/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let value = 0;
    let h_value = 0;
    if(citations.length == 1) {
        if (citations[0] == 0) return 0;
        return 1;
    }
    citations.sort(function(a,b){
        return b-a;
    });
    //console.log(citations)s
    for(let i=0;i<citations.length;i++){
        if(i+1 <= citations[i]){
            //value = citations[i];
            h_value = i+1;
        }else{
            break;
        }
    }
    return h_value;
};