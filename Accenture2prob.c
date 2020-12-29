
Assumption:

All array elements are unique
Treat the 0th position a seven
NOTE

Return 0 if array is empty
Return 0, if array length is 3 or less than 3
Example

Input

arr:3 2 1 7 5 4

Output

7

Explanation

Second largest among even position elements(1 3 5) is 3
Second largest among odd position element is 4
Thus output is 3+4 = 7
Sample Input

arr:1 8 0 2 3 5 6

Sample Output

8



#include <stdio.h>
void maxer(int arr[],int N){
  for(int i=0;i<N;i++){
    // printf("%d ",arr[i]);
    for(int j=1;j<N;j++){
      if(arr[i]>arr[j]){
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
  }
}
int main(){
  int arr[]={3,2,1,7,5,4};
  int N=6,k=0,l=0;
  int arr1[N/2];
  int arr2[N/2];
  int X=(N%2==0)?0:1;
  if(N<4){
    printf("0");
  }
  else{
  for(int i=0;i<N;i++){
    if(i%2==0){
      arr1[k]=arr[i];
      k++;
    }
    else{
      arr2[l]=arr[i];
      l++;
    }
  }
  int x =N/2;
  maxer(arr1,x+X);
  maxer(arr2,x);
  printf("%d ",arr1[x-1]+arr2[x-1]);
}
}
