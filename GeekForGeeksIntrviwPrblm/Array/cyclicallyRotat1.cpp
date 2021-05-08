#include <iostream>
using namespace std;
// Input:  arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}
int main()
{
	int arr[] = {1, 2, 3, 4, 5};
	int size=sizeof(arr)/4;
	int oneRotate=1;
	int ar[size];
	int k=1;
	for(int i=oneRotate;i<size;i++){
		ar[k++]=arr[i-1];
	}
	ar[0]=arr[k-1];
	for(int i:ar){
		cout<<i<<" ";
	}
	
}

