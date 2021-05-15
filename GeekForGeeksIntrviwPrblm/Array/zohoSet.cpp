 Given a set of numbers like <10, 36, 54,89,12> we want to find sum of weights based on the following conditions
    1. 5 if a perfect square
    2. 4 if multiple of 4 and divisible by 6
    3. 3 if even number
    
    #include <iostream>
#include <cstdio>
using namespace std;
int perfectSq(int n){
	for(int i=1;i<n/2;i++){
		if(i*i==n){
			return 1;
		}
	}
	return 0;
}
int mul(int n){
	if(n%4==0 && n%6==0)return 1;
	return 0;
}
int main()
{
	int *arr = NULL;
	arr = (int*)malloc(sizeof(int));
	if(arr!=NULL){
		int n;
		while(scanf("%d",&arr[n])==1){
			n++;
			arr=(int*)realloc(arr,n+1);
		}
		for(int i=0;i<n;i++){
			int x=0;
			if(perfectSq(arr[i])){
				x+=5;
			}
			if(mul(arr[i])){
				x+=4;
			}
			if(n&1){
				x+=3;
			}
			cout<<"<"<<arr[i]<<","<<x<<"> ";
		}
	}
	
	return 0;
}
Respective Weights:
<10,3> <36,12> <54,3> <89,3> <12,7> 
