#include <iostream>
using namespace std;
int main()
{
	string s="PROGRAM";
	int N = s.length();
	for(int i=0;i<N;i++){
		for(int j=0;j<N;j++){
			if(i==j){
				cout<<s[i]<<" ";
			}
			else if(i+j==N-1){
				cout<<s[N-1-i]<<" ";
			}
			else{
				cout<<" ";
			}
		}
		cout<<endl;
	}
	
	return 0;
}


OUTPUT:

P         M
 R      A
   O  R
     G
  O    R
 R       A
P          M 
