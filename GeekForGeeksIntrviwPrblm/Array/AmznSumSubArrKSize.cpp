Question
Find maximum (or minimum) sum of a subarray of size k

Difficulty Level : Easy
Last Updated : 08 Jul, 2022
Given an array of integers and a number k, find the maximum sum of a subarray of size k. 

Examples: 

Input  : arr[] = {100, 200, 300, 400}
         k = 2
Output : 700

Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}
         k = 4 
Output : 39
We get maximum sum by adding subarray {4, 2, 10, 23}
of size 4.

Input  : arr[] = {2, 3}
         k = 3
Output : Invalid
There is no subarray of size 3 as size of whole
array is 2.

ANSWER :

#include <bits/stdc++.h>
using namespace std;
// Input  : arr[] = {100, 200, 300, 400}
//          k = 2
// Output : 700

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}
//          k = 4 
// Output : 39
int main()
{
	int arr[] =  {1, 4, 2, 10, 23, 3, 1, 0, 20};
	int k=4,l=0,r=9,max=-1e4;
	while(l<=r-k){
		int sum=0;
		for(int i=l;i<l+k;i++){
			sum+=arr[i];
		}
		if(max<sum){
			max=sum;
		}
		l++;
	}
	(max<0)?cout <<"Invalid":cout <<max;
	return 0;
}
