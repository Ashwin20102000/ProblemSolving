 Save the string “WELCOMETOZOHOCORPORATION” in a two dimensional array and search for substring like “too” in the two dimensional string both from left to right and from top to bottom.

w	e	L	C	O
M	E	T	O	Z
O	H	O	C	O
R	P	O	R	A
T	I	O	n	  

And print the start and ending index as

Start index : <1,2>

End index: <3, 2>

  
  #include <iostream>
#include <cstdio>
using namespace std;
int main()
{
	string s;
	cin>>s;
	int n = s.length()/5+1;
	int k=0;
	string key="TOO";
	int z=key.length();
	char mat[n][n];
	int r=0,c=0,t=1;
	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){
			if(k<s.length()){
				mat[i][j] = s[k++];
			}
			else{
				mat[i][j] = '-';
			}
			if(key[0]==mat[i][j] && t==1){
				r=i;
				c=j;
				t=0;
			}
		}
	}
		cout<<"<"<<r<<","<<c<<">"<<endl;
	string top="",right="",down="",left="";
	for(int i=0;i<z;i++){
		top+=mat[r-i][c];	
		right+=mat[r][c+i];	
		down+=mat[r+i][c];	
		left+=mat[r][c-i];	
	}
	if(top==key){
		cout<<"<"<<r-2<<","<<c<<">";
	}
	else if(left==key){
		cout<<"<"<<r<<","<<c-2<<">";
	}
	else if(right==key){
		cout<<"<"<<r<<","<<c+2<<">";
	}
	else{
		cout<<"<"<<r+2<<","<<c<<">";
	}
	return 0;
}


Output:
<1,2>
<3,2>
