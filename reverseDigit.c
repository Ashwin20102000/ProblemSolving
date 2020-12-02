#include <stdio.h>

int main(){
  int N=123,sum=0,rem;
  while(N!=0){
    rem=N%10;
    sum=sum*10+rem; 
    N/=10;
  }
  printf("%d",sum);
  return 0;
}
