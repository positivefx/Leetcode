/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    const helperAdd = (number) => {
        if (number < 10) {
            return number;
        } else {
            let sum = 0;
            let toArr = number.toString().split('');
            for (let i = 0; i < toArr.length; i++) {
                sum += Number(toArr[i]);
            }
            return helperAdd(sum)
        }
    }
   return helperAdd(num)

};