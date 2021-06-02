// 678
class Solution {
public:
    bool checkValidString(string s) {
        int left=0,right=0,star=0;
        for(char c:s){
            if(c=='(')left++;
            else if(c==')')right++;
            else if(c=='*')star++;
            if(left+star<right)return 0;
        }
        reverse(s.begin(),s.end());
        left=0,right=0,star=0;
        for(char c:s){
            if(c=='(')left++;
            else if(c==')')right++;
            else if(c=='*')star++;
            if(right+star<left)return 0;
        }   
        return 1;
    }
};
