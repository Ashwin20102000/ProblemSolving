
#include <bits/stdc++.h>
using namespace std;
int main() {
  int N=4;
  int arr[]={3,2,5,1};
  int X=6,k=0;
  for(int i=0;i<X;i++){
    for(int j=0;j<X;j++){
      if(i==j || i>j){
        printf("%d ",arr[k++]);
        if(k==N){
          k=0;
        }
      }
    }
    printf("\n");
  }
  return 0;
}
