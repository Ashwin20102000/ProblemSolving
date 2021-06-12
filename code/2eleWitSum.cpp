#include<iostream>
#include<algorithm>
using namespace std;
//have func and return 1 in 1st  if:
int main(){
	int arr[] = {0, -1, 2, -3, 1};
	int sum=-2;
	int l=0,r=4;
	sort(arr,arr+r);
	while(l<=r){
		if(arr[l]+arr[r]==sum){
			break;
		}
		else if(arr[l]+arr[r]<sum){
			l++;
		}
		else{
			r--;
		}
	}
	(f==0)?cout<<-1:cout<<arr[l]<<" "<<arr[r]; 
	return 0;
}
