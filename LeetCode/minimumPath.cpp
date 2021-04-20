class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        int row=grid.size();
        int col=grid[0].size();
        if(row==0||col==0){//prerequsite check
            return 0;
        }
        vector<vector<int>> dp(row,vector<int>(col,3));//dummy vector
        dp[0][0]=grid[0][0];//intializing first element starting point
        for(int i=1;i<col;i++){//accumulator for first row
            dp[0][i]=dp[0][i-1]+grid[0][i];
        }
        for(int j=1;j<row;j++){//accumulator for first column
            dp[j][0]=dp[j-1][0]+grid[j][0];
        }
        for(int i=1;i<row;i++){//filling rest of the areas
            for(int j=1;j<col;j++){
                dp[i][j]=grid[i][j]+min(dp[i-1][j],dp[i][j-1]);//finding minimum way . simply heart of the program
            }
        }
        return dp[row-1][col-1];//mimimum path sum
    }
};
// Tabulation
// Thank you,Your's Ashwin J
// 61/61 test cases
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

 

// Example 1:


// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 100
