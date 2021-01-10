#include <iostream>
using namespace std;
void dashes(int N){
  for(int j=0;j<N;j++){
    cout << "-";
  }
}
void reverser(int s,int e){
  for(int i=s+1;i<=e;i++){
    if(i==e)cout<<i;
    else cout << i <<"*";
  }
}
int main() {
  int N=7;
  int F=N-1;
  int a=1;
  int K=0;
  int squares=N*N;
  int squaresN=N*N+N;
  // let us split into 3parts
  for(int i=0;i<N;i++){
// I part = Dashes
    dashes(K);
    // 2nd Part -Middle Numbers
    if(K>=i){
      for(int j=1;j<=N-i;j++){
        cout << a++ <<"*";
      }
    }
    K+=2;
    int x=1;
    // 3rd Part Reversed Numbers
    reverser(squares,squaresN);
    squares-=F;
    squaresN-=F+x;
    x++;
    F--;
    cout <<endl;
  }
}
