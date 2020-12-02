// Odd-Even Values Difference (Id-2707)

// Given a value of N positive integers, the program must print the difference between the sum of odd integers and the sum of even integers.

// Input Format:
// The first line will contain the value of N
// The second line will contain the N positive integers separated by a space.

// Output Format:
// The first line will contain the integer value denoting the difference.

// Constraints:
// 2 <= N <= 25

// Example Input/Output 1:
// Input:
// 5
// 10 11 20 33 1

// Output:
// 15

// Explanation:
// The sum of odd integers is = 11+33+1 = 45.
// The sum of even integers is = 10+20 = 30.
// Hence the difference 45-30 = 15 is printed as the output.


// Example Input/Output 2:
// Input:
// 6
// 2 24 7 35 5 30

// Output:
// -9

// Explanation:

// The sum of odd integers is = 7+35+5 = 47
// The sum of even integers is = 2+24+30 = 56
// Hence the difference 47-56 = -9 is printed as the output.
import java.util.*;
class Main {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int N = scan.nextInt();
    int arr[] = new int[N];
    for(int i=0;i<N;i++){
      arr[i]= scan.nextInt();
    }
    int mini= -1000;
    int maxi = 1000;
    for(int i=0;i<N;i++){
      if(mini<arr[i]){
        mini=arr[i];
      }
    }
    for(int i=0;i<N;i++){
      if(maxi>arr[i]){
        maxi=arr[i];
      }
    }
    for(int i=0;i<N;i++){
      if(arr[i]==mini)System.out.print(maxi+" ");
      if(arr[i]==maxi)System.out.print(mini+" ");
      if(arr[i]!=maxi && arr[i]!=mini)System.out.print(arr[i]+" ");
    }
  }
}
