Top 3 elements Sum:
#include <bits/stdc++.h>
#include <cstdio>
using namespace std;
int val(int* ar,int N){
	int sum1=INT_MIN;
	int sum2=INT_MIN;
	int sum3=INT_MIN;
	for(int i=0;i<N;i++){
		if(ar[i]>sum1){
			sum3=sum2;
			sum2=sum1;
			sum1=ar[i];
		}
		else if(ar[i]>sum2){
			sum3=sum2;
			sum2=ar[i];
		}
		else if(ar[i]>sum3){
			sum3=ar[i];	
		}
	}
	// cout<<sum1<<" "<<sum2<<" "<<sum3;
	return sum1+sum2+sum3;
}
int main()
{
	int *arr=NULL;
	arr = (int*)malloc(sizeof(int));
	if(arr!=NULL){
		int n=0;
		while(scanf("%d ",&arr[n])==1){
			n++;
			arr = (int*)realloc(arr,n+1);
		}
		cout<< val(arr,n);
	}
	return 0;
}


IP:2 6 23 7 3
 OP: 36 
   ex: top 3 numbers are 23,7,6
