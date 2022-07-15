/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

var reverseNum = x.toString().split("").reverse().join("");
    
if(parseInt(reverseNum) === x){
    return true; 
} else {
    return false; 
}

};