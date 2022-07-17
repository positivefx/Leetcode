/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    let min = 1; 
    let max = x; 
    
    if (x < 2) {
        return x;
    }
    
    while (min < max) {
        let mid = Math.floor((min + max)/2);
        
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid > x) {
            max = mid;
        } else if (mid * mid < x) {
            min = mid + 1;
        }
        
    }
    
    return min - 1;
};