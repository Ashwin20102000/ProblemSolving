#include<iostream>
using namespace std;
int main(){
	int arr[] = {5, 7, 2, 7, 5, 2, 5};
	int n=7;
	int ele=0,count=0;
	for(int i=0;i<n;i+=2){
		if(count==0)ele=arr[i];
		(arr[i]==ele)?count++:count--;
	}
	cout<<ele;
	return 0;
}
