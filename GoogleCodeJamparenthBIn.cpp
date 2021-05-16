#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;cin>>t;
    for(int c=1;c<=t;c++){
        string s; cin>>s;
        string val="";
        int ct=0;
        for(char c:s){
            int x=c-'0';
            while(ct<x){
            	val+='(';
            	ct++;
            }
            while(ct>x){
            	val+=')';
            	ct--;
            }
            val+=c;
        }
        while(ct--){val+=')';}
        cout<<"Case #"<<c<<": "<<val<<endl;
    }
    return 0;
}
4
0000
101
111000
1
Case #1: 0000
Case #2: (1)0(1)
Case #3: (111)000
Case #4: (1)
