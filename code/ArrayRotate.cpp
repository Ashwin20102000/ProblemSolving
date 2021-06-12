https://leetcode.com/problems/rotate-array/
#include<iostream>
#include<algorithm>
using namespace std;

int main(){
	int A[] = {1,2,3,4,5,6,7,8};
	int x=2,n=8;
	int l=0,r=n-1,k=0;
	for(int i=l;i<x/2;i++){
		A[i]^=A[x-i-1];
		A[x-i-1]^=A[i];
		A[i]^=A[x-i-1];
	}
	int y=0;
	for(int i=x;i<=n/2;i++){
		A[i]^=A[n-y-1];
		A[n-y-1]^=A[i];
		A[i]^=A[n-y-1];
		y++;
		
	}
	reverse(A,A+n);
	for(int i:A)cout<<i<<" ";
	return 0;
}
