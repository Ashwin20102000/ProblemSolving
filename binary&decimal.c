
#include <stdio.h>
#include <math.h>

int toDecimal(int n){
  // convert binary to decimal
  int num = 0,rem=0,i=0,val=0;
  while(n!=0){
    rem=n%10;
    n/=10;
    val += rem* pow(2,i);
    ++i;
    // base2 binary 0 1
  }
  return val;
}

int toBinary(int n){
  // convert decimal to binary
  int rem=0,i=1,val=0;
  int num = 0;
  while(n!=0){
    rem= n%2;
    n/=2;
    val+=rem*i;
    i*=10;
  }
  return val;
}

int main(void) {
  int n1,n2;
  scanf("%d %d",&n1,&n2);
  int n3 = toDecimal(n1) + toDecimal(n2);
  printf("num 1:%d\n",toDecimal(n1));
  printf("num 2 :%d\n",toDecimal(n2));
  printf("binary of Num1 + Num2 = %d",toBinary(n3));
  return 0;
}
