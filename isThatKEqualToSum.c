//the problem here is to find the sum of K in array where the pair of points as the output. 
#include<stdio.h>
int main(){
  int arr[]={45,50,90,100,10};
  int size=sizeof(arr)/sizeof(arr[0]);
  int k=145,arr1[2];
  for(int i=0;i<size;i++){
    for(int j=i+1;j<size;j++){
      if(arr[i]+arr[j]==k){
      arr1[0]=i;
      arr1[1]=j;
    }
    }
  }
  printf("[%d,%d]",arr1[0],arr1[1]);
}
