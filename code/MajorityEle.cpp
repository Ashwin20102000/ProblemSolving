nums=[3,2,3]
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int count=0,ele=0; 
        for(int i:nums){
            if(count==0)ele=i;/3,2,3
            i==ele?count++:count--;//3==3:c=1,2==2:c=0,3==3:c=1=>e=3
        }
        return ele;
    }
};
