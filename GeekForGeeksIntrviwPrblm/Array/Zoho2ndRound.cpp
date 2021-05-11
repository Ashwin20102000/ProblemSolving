#include <iostream>
using namespace std;
#define max(a,b) a>b?a:b
// Given an array of integers, replace every element with the next greatest element (greatest element on the right side) in the array. Since there is no element next to the last element, replace it with -1. For example, if the array is {16, 17, 4, 3, 5, 2}, then it should be modified to {17, 5, 5, 5, 2, -1}.
int main()
{
	int arr[]={16, 17, 4, 3, 5, 2};
	int N = sizeof(arr)/4;
	int max=arr[N-1];
	int ar[N];
	int k=0;
	for(int i=N-1;i>=0;i--){
		ar[k++]=arr[i];
	}
	for(int i=0;i<N;i++){
		if(ar[i]>max){
			max=ar[i];
		}
		ar[i]=max;
	}

	for(int i=N-2;i>=0;i--){
		cout<<ar[i]<<" ";
	}
	cout<<-1<<" ";
	
}
// Expected  : {17, 5, 5, 5, 2, -1}
// Program's : 17 5 5 5 2 -1 

