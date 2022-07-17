/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if (prices.length === 0) {
        return 0; 
    }
    
    let profit = 0; 
    let min = 10**4;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        
        let diff = prices[i] - min;
        
        if (diff > profit) {
            profit = diff
        }
    }
    return profit;
    
};