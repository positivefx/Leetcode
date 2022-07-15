/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  let abs = Math.abs(x);
  let reverseNum = parseInt(abs.toString().split('').reverse().join(''));
  let finalNum = reverseNum * Math.sign(x);
    
  if (finalNum > 2**31 -1 || finalNum < (-2)**31) {
    return 0;
  } else {
    return finalNum;
  }
    
};
