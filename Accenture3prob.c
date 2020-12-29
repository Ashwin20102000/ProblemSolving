Return -1 if array is empty or if n<2
Return 0, if no such pairs found
All computed values lie within integer range
Example

Input

sum:9

Arr:5 2 4 3 9 7 1

Output

2

Explanation

Pair of least two element is (2, 1) 2 + 1 = 3 < 9, Product of (2, 1) 2*1 = 2. Thus, output is 2

Sample Input

sum:4

Arr:9 8 3 -7 3 9

Sample Output

-21





#include<stdio.h>
void pair(int i,int j,int Sum){
  // printf("%d %d",i,j);
  if(i+j<Sum){
    printf("%d",i*j);
  }
  else{
    printf("0");
  }
}
void finder(int arr[],int N,int S){
  for(int i=0;i<N;i++){
    for(int j=i+1;j<N;j++){
      if(arr[i]>arr[j]){
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
  }
  pair(arr[0],arr[1],S);
}
int main(){
  int Sum=4;
  int arr[]={9,8,3,-7,3,9};
  int N=sizeof(arr)/sizeof(arr[0]);
  if(N<2)printf("-1");
  else finder(arr,N,Sum);
}
