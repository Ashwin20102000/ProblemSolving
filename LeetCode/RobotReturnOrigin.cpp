class Solution {
public:
    bool judgeCircle(string moves) {
        int size = moves.length();
        int x=0,y=0;
        bool isOrigin=false;
        if(size%2!=0)return isOrigin;
        for(int i=0;i<size;i++){
            if(moves[i]=='L'){
                x--;
            }
            else if(moves[i]=='R'){
                x++;
            }
            else if(moves[i]=='U'){
                y++;
            }
            else{
                y--;
            }
        }
        if(x==0 && y==0){
            isOrigin=true;
        }
        return isOrigin;
    }
};

// https://leetcode.com/problems/robot-return-to-origin/
