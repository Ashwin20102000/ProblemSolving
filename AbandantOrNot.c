#include <stdio.h>
// Program to check whether a number is Abundant number or not | 
// Published on 10 Mar 2020
// Program to check whether a number is Abundant number or not is discussed here. An abundant number is a number for which the sum of its proper divisors is greater than the number itself.

// Input & Output format:

// Input consists of 1 integer.
// If it is an Abundant number display Abundant Number or display Not Abundant Number.

// Sample input:

// 12

// Sample Output:
// Abundant Number

// Explanation:

// The divisors of 12 are 1, 2, 3, 4 and 6.
// The sum of divisors of 12 is 16.
// 12 < 16.Hence, 12 is an abundant number.
int main() {
  int Number;
  scanf("%d",&Number);
  int sum=0;
  for(int i=1;i<Number;i++){
    if(Number%i==0)sum+=i;
  }
  printf("%s",(Number>sum)?"Not_Abundant":"Abundant");
  return 0;
}
