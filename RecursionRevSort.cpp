#include<iostream>
using namespace std;
void reverser(string str,int index){
	if(index==0){
		cout<<str[index];
		return;
	}
	else{
		cout<<str[index];
		reverser(str,index-1);
	}
}
int main(){
	ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);
	string s="Hot Sauce";
	reverser(s,s.size()-1);
}
