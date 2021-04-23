Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105

// time complexity O(n)
//   Space complexity O(1)
class Solution {
public:
    int trap(vector<int>& height) {
        int size = height.size();
//       Boundary condition where three blocks are must for filling (|_|possible)   ( || or  | not possible)
        if(size<=2)return 0;
        int l=1;
        int r=size-2;
        int lmax=height[0];
        int rmax = height[size-1];
        int trapWater=0;
        while(l<=r){
            if(lmax<rmax){
                if(height[l]>=lmax){
                    lmax=height[l];
//                   updating lmax where it hits the new heights
                }
                else{
                    trapWater+=(lmax-height[l]);
                }
                l++;
            }
            else{
                if(height[r]>rmax){
                    rmax=height[r];
//                    updating rmax where it hits the new heights
                }
                else{
                    trapWater+=(rmax-height[r]);
                }
                r--;
            }
        }
        return trapWater;
    }
};
