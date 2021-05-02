#include<iostream>
using namespace std;
int32_t main(){
	int arr[]={3,9,62,8,6,8,32,5,39};
	int size= sizeof(arr)/sizeof(arr[0]);
	for(int i=0;i<size-1;i++){
		for(int j=0;j<size-1-i;j++){
			if(arr[j]>arr[j+1]){
				arr[j]^=arr[j+1];
				arr[j+1]^=arr[j];
				arr[j]^=arr[j+1];
			}
		}
	}
	for(int i=0;i<size;i++){
		cout<<arr[i]<<" ";
	}
	return 0;
}
