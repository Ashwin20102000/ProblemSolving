// 15. 3Sum
// Medium
// 22.6K
// 2.1K
// Companies
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105
// Accepted
// 2.4M
// Submissions
// 7.3M
// Acceptance Rate
// 32.3%

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const ans = {};
    nums = nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        let left=i+1,right=nums.length-1;
        while(left<right){
            let currSum = nums[i]+nums[left]+nums[right],
            key = `${nums[i]},${nums[left]},${nums[right]}` ;
            if(currSum===0){
                ans[key]=[nums[i],nums[left],nums[right]];
                left++;
                right--;
            }
            else if(currSum>0){
                right--;
            }
            else if(currSum<0){
                left++;
            }

        }
    }
    // console.log({ans})
    return Object.values(ans);
};

// Runtime
// 756 ms
// Beats
// 18.43%
// Memory
// 67.9 MB
// Beats
// 6.76%


//Status : Success

// 328. Odd Even Linked List
// Medium
// 6.5K
// 401
// Companies
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:


// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
 

// Constraints:

// The number of nodes in the linked list is in the range [0, 104].
// -106 <= Node.val <= 106
// Accepted
// 609.5K
// Submissions
// 1M
// Acceptance Rate
// 60.3%
  
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head===null||head.next===null){
        return head
    }
   let first = head,second=first.next,secondHead = second;
   while(second!==null && second.next!==null){
       first.next=second.next;
       first=first.next
       second.next=first.next;
       second=second.next
   }
   first.next =secondHead;
   return head;
};

// JavaScript
// Runtime
// 125 ms
// Beats
// 38.27%
// Memory
// 45 MB
// Beats
// 23.29%

// Status : Success

// 11. Container With Most Water
// Medium
// 21.3K
// 1.1K
// Companies
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104
// Accepted
// 1.8M
// Submissions
// 3.4M
// Acceptance Rate
// 54.3%


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0,right=height.length-1,maxAreaStore=-Infinity;
    while(left<right){
        // console.log({maxAreaStore});
        maxAreaStore = Math.max(maxAreaStore,Math.min(height[left],height[right])*(right-left));
        if(height[left]<height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxAreaStore;
};

// JavaScript
// Runtime
// 121 ms
// Beats
// 66.17%
// Memory
// 50 MB
// Beats
// 27.15%

// Status : Success
