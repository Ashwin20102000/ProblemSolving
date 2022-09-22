Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        unordered_map<int,int> m;
        for(int i=0;i<nums.size();i++){
            m[nums[i]]++;
            if(m[nums[i]]>1)return nums[i];
        }
        return -1;
    }
};

(Another Approach):

// [1,3,4,2,2]
          int slow=nums[0];
         int fast=nums[0];
        do
        {
            slow=nums[slow];        //3 , 3 
            fast=nums[nums[fast]];  //2 , 3
        }while(slow!=fast);//3!=2,
    
        slow=nums[0]; //slow = 1
        while(slow!=fast)
        {
        slow=nums[slow]; //1,3,2
        fast=nums[fast]; //2,4,2
        }
        return slow; // 2
//limits are more important
//Idea here is so simple when randomizing these elements.


JS Approach 

var findDuplicate = function(nums) {
    let data = {};
    for(let i=0;i<nums.length;i++){
        data[nums[i]]=data[nums[i]]?data[nums[i]]:0;
        data[nums[i]]++;
        if(data[nums[i]]>1)return nums[i];
    }
    return -1;
    
};

https://leetcode.com/problems/find-the-duplicate-number/
