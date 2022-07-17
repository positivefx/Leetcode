/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    if (num < 10) {
        return num;
    } else {
        let sum = 0; 
        let toArr = num.toString().split('');
        
        for (let i = 0; i < toArr.length; i++) {
            sum += Number(toArr[i]);
        }
        return addDigits(sum);
    }

};