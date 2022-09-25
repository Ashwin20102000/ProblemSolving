123. Best Time to Buy and Sell Stock III
Hard

7041

140

Add to List

Share
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = [],memo={};
    for(let i=1;i<prices.length;i++){
        if(prices[i-1]<prices[i]){
            ans.push(prices[i]-prices[i-1]);
        }
    }
    if(ans.length===0){
        return 0;
    }
    for(let val of ans){
        memo[val+""]=(memo[val+""]===undefined)?1:++memo[val+""];
    }
    if(Object.keys(memo).length===1){
        // const maxkey = Math.max(...Object.keys(memo));
        return ans.length*ans[0];
    }
    const val = [... new Set(ans.sort((a,b)=>b-a))];
    if(memo[val[0]+'']>memo[val[1]+'']){
        return val[0]*memo[val[0]+''];
    }
    console.log({memo,ans,val})
    const res = (val[0]*memo[val[0]+'']||0)+(val[1]*memo[val[1]+'']||0);
    return ans.reduce((a,b)=>a+b);
};
 
 

 
// 177 / 214 test cases passed.
// Status: Wrong Answer
// Submitted: 12 minutes ago
// Input:
// [14,9,10,12,4,8,1,16]
// Output:
// 22
// Expected:
// 19
//Not Overed Yet
