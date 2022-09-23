Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const linearCheck = (arr) => {
    let isValid = {};
    arr.forEach((a)=>{
        if(!isValid[a]){
            isValid[a] = 0;            
        }
        isValid[a]++;
    })
    if(isValid["."]===9){
        return true;
    }
    delete isValid["."];
    return Math.max(...Object.values(isValid))===1?true:false;
}
var isValidSudoku = function(board) {
    let ans = false;
    for(let i=0;i<board.length;i++){
            let v=[],h=[],s=[];
            for(let j=0;j<board[i].length;j++){
                v.push(board[j][i]);
            }
            for(let j=0;j<board[i].length;j++){
                h.push(board[i][j]);
                
            }
            if((i)%3===0){
                let a = board[i].slice(0,3);
                let b = board[i+1].slice(0,3);
                let c = board[i+2].slice(0,3);
                ans = (linearCheck([...a,...b,...c]))
                if(!ans){
                    return ans;
                }
                let a1 = board[i].slice(3,6);
                let b1 = board[i+1].slice(3,6);
                let c1 = board[i+2].slice(3,6);
                ans = (linearCheck([...a1,...b1,...c1]))
                if(!ans){
                    return ans;
                }
                let a2 = board[i].slice(6);
                let b2 = board[i+1].slice(6);
                let c2 = board[i+2].slice(6);
                ans = (linearCheck([...a2,...b2,...c2]))
                if(!ans){
                    return ans;
                }
            }
        
            ans = linearCheck(v);
            if(!ans){
              return ans;
            }
            ans = linearCheck(h) 
            if(!ans){
                 return ans;
            }
        }
        return ans;
};

// Success
// Details 
// Runtime: 173 ms, faster than 12.13% of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 50.5 MB, less than 6.93% of JavaScript online submissions for Valid Sudoku.
