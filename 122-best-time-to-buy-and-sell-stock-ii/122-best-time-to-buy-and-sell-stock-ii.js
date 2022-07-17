/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0; 
    
    let min = 10**4; 
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            let diff = prices[i] - prices[i -1];
            profit += diff;
        }
    }
    return profit;
};