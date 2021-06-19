#include <bits/stdc++.h>
using namespace std;
int fun(int i,string &s,unordered_set<string> &st,string temp){
	if(i==s.size())return 0;
	temp+=s[i];
	int ans1=INT_MIN/2,ans2=INT_MIN/2;
	if(st.find(temp)==st.end()){
		st.insert(temp);
		ans1=1+fun(i+1,s,st,"");
		st.erase(temp);
	}
	ans2=fun(i+1,s,st,temp);
	return max(ans1,ans2);
}
int main()
{
	string s="abcaba";
	unordered_set<string> st;
	cout<< fun(0,s,st,"");
	return 0;
}


op:
4
