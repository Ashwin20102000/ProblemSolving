#include <iostream>
using namespace std;
// Find the Missing Number
// Difficulty Level : Easy
// Last Updated : 19 Apr, 2021
// You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in the list. One of the integers is missing in the list. Write an efficient code to find the missing integer.
// Example: 

// Input: arr[] = {1, 2, 4, 6, 3, 7, 8}
// Output: 5
// Explanation: The missing number from 1 to 8 is 5

// Input: arr[] = {1, 2, 3, 5}
// Output: 4
// Explanation: The missing number from 1 to 5 is 4
int main()
{
	int arr[] = {1, 2, 4, 6, 3, 7, 8};
	int size=sizeof(arr)/4;
	int Value = (size+1)*(size+2)/2;
	for(int i:arr)Value-=i;
	cout<<Value;
	
	
}

