Leetcode: Hard

Given an unsorted integer array nums, find the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Example 2:

Input: nums = [3,4,-1,1]
Output: 2

class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        unordered_set<int> s; //set remove duplicate
        for(auto it:nums){
            if(it>0 && it<=nums.size()){ //values which are positive only taken into account  and array size must not be greater
                s.insert(it);
            }
        }
        for(int i=1;i<=nums.size();i++){
            if(s.count(i)==0){ //every values in the set is going to be 1 .if it's missing number then it will be 0
                return i;
            }
        }
        return nums.size()+1; //if all the values are [1,2,3] so we have to take it as 4 
    }
};

//corner cases:
  #values which are positive only taken into account
  #
