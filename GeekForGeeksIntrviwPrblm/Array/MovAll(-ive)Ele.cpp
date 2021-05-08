#include <iostream>
using namespace std;
// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5
int main()
{
	int arr[]={-12, 11, -13, -5, 6, -7, 5, -3, -6};
	int size=sizeof(arr)/4;
	int ar[size];
	int k=0;
	for(int i=0;i<size;i++){
		if(arr[i]<0){
			ar[k++]=arr[i];
		}
	}
	for(int i=0;i<size;i++){
		if(arr[i]>0){
			ar[k++]=arr[i];
		}
	}
	for(int x:ar){
		cout<<x<<" ";
	}	
}

