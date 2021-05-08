#include <iostream>
using namespace std;
// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}

// Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
// Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
int main()
{
	int arr[]={0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1};
	int size=sizeof(arr)/4;
	int ZnZ=0;
	int OnZ=0;
	int ToZ=0;
	for(int i=0;i<size;i++){
		if(arr[i]==0)ZnZ++;
		if(arr[i]==1)OnZ++;
		if(arr[i]==2)ToZ++;
	}
	int ar[size];
	int k=0;
	for(int j=0;j<ZnZ;j++){
		ar[k++]=0;
	}
	for(int j=0;j<OnZ;j++){
		ar[k++]=1;
	}
	for(int j=0;j<ToZ;j++){
		ar[k++]=2;
	}
	for(int i:ar){
		cout<<i<<" ";
	}
	
}

