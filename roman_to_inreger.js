/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let finalInteger = 0;
    let currentValue = 0;
    let nextValue = 0;
    for (let i = 0; i < s.length; i++) {
        currentValue = romanNumerals[s[i]];
        nextValue = romanNumerals[s[i+1]];
        if(nextValue > currentValue){
            finalInteger = finalInteger + nextValue - currentValue;
            i++;
        }else{
            finalInteger = finalInteger + currentValue;
        }
    }
    return finalInteger;
};