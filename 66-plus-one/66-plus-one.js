/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastDigit = digits.length -1
    
    for (let i = lastDigit; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++; 
            return digits;
        } 
        
        if (digits[i] === 9) {
             digits[i] = 0
        }
    }
    digits.unshift(1)
    return digits
};