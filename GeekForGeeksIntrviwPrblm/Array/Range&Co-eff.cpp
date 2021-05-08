#include <iostream>
using namespace std;
// Given an array arr of integer elements, the task is to find the range and coefficient of range of the given array where:
// Range: Difference between the maximum value and the minimum value in the distribution.
// Coefficient of Range: (Max – Min) / (Max + Min).

// Examples:

// Input: arr[] = {15, 16, 10, 9, 6, 7, 17}
// Output: Range : 11
// Coefficient of Range : 0.478261
// Max = 17, Min = 6
// Range = Max – Min = 17 – 6 = 11
// Coefficient of Range = (Max – Min) / (Max + Min) = 11 / 23 = 0.478261

// Input: arr[] = {5, 10, 15}
// Output: Range : 10
// Coefficient of Range : 0.5
int main()
{
	int arr[]={15, 16, 10, 9, 6, 7, 17};
	int size=sizeof(arr)/4;
	int max=arr[0];
	for(int i=1;i<size;i++){
		if(max<arr[i]){
			max=arr[i];
		}
	}
	int min=arr[0];
	for(int i=1;i<size;i++){
		if(min>arr[i]){
			min=arr[i];
		}
	}
	cout<<"Range : "<<max-min<<endl;
	cout<<"Co-Efficient : "<<(float)(max-min)/(max+min)<<endl;
	
	
	
}

