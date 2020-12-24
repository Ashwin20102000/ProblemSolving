Input:
Matrix:
 1  2  3
 4  5  6
 7  8  9
Output:
 3  6  9 
 2  5  8 
 1  4  7 
The given matrix is rotated by 90 degree 
in anti-clockwise direction.

Input:
 1  2  3  4 
 5  6  7  8 
 9 10 11 12 
13 14 15 16 
Output:
 4  8 12 16 
 3  7 11 15 
 2  6 10 14 
 1  5  9 13
The given matrix is rotated by 90 degree 
in anti-clockwise direction.

#include <iostream>
using namespace std;

int main(){
   int N;
   scanf("%d",&N);
   int X,Y=-1;
   int arr1[N][N];
   int arr[N][N];
   for(int i=0;i<N;i++){
     for(int j=0;j<N;j++){
       scanf("%d ",&arr[i][j]);
     }
   }
  for(int i=0;i<N;i++){
    X=N;
    for(int j=0;j<N;j++){
      X-=1;
      arr1[i][j]=arr[X][i];
      // printf("%d-%d ",X,Y);
    }
      printf("\n\n\n");
  }
  for(int i=N-1;i>=0;i--){
    for(int j=N-1;j>=0;j--){
      printf("%d ",arr1[i][j]);
    }
    printf("\n");
  }
  return 0;
}
