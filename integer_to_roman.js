/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanNumerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];
    let result = "";
    result += romanNumerals[3][Math.floor(num/1000)];
    result += romanNumerals[2][Math.floor(num % 1000/100)];
    result += romanNumerals[1][Math.floor(num % 100/10)];
    result += romanNumerals[0][Math.floor(num % 10)];
    return result;
};
